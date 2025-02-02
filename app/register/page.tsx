"use client";

import { FormEvent, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SelectPackage from "@/components/ui/select-package";
import toast from "react-hot-toast";
import { useRegister, useXeeBalance } from "@/hooks/use-contract";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SwapSection } from "@/components/swap-section";
import { b2f } from "@/lib/utils";
import { useContractData } from "@/context/contract";

// Country codes data
const countryCodes = [
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
].sort((a, b) => a.country.localeCompare(b.country));

function CountryCodeSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selectedCountry = countryCodes.find((c) => c.code === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="glass-card w-[140px]justify-between"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="text-xl">{selectedCountry?.flag}</span>
            <span className="text-base font-medium">{value}</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0 bg-[#1a0329]/95 backdrop-blur-xl border-purple-500/20">
        <Command>
          <CommandInput
            placeholder="Search country..."
            className="h-12 bg-transparent"
          />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup className="max-h-[300px] overflow-auto">
            {countryCodes.map((country) => (
              <CommandItem
                key={country.code}
                value={`${country.country} ${country.code}`}
                onSelect={() => {
                  onChange(country.code);
                  setOpen(false);
                }}
                className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-purple-500/20"
              >
                <span className="text-xl">{country.flag}</span>
                <div className="flex flex-col">
                  <span className="font-medium">{country.country}</span>
                  <span className="text-sm text-gray-400">{country.code}</span>
                </div>
                {value === country.code && (
                  <Check className="ml-auto h-4 w-4 text-purple-500" />
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    countryCode: "+1",
    position: "left" as "left" | "right",
    package: 0,
    ref: 0,
  });
  useEffect(() => {
    // Access window object only after component mounts
    const params = new URLSearchParams(window.location.search);
    const _ref = parseInt(params.get("ref") || "0") || 0;
    const position = params.get("position") || "left";

    setFormData((prev) => ({
      ...prev,
      position: position as "left" | "right",
      ref: _ref,
    }));
  }, []);
  const {
    registerUser,
    isPriceLoading,
    isPriceReady,
    packageIndex,
    packagePrice,
    setPackageIndex,
    isPriceError,
    status,
  } = useRegister({
    _package: formData.package,
  });
  const { tokenInfo } = useContractData();
  useEffect(() => {
    console.log({ packagePrice });
  }, [packagePrice]);
  const { isConnected } = useAppKitAccount();
  const { open } = useAppKit();
  const { data: xeeBalanceData } = useXeeBalance();
  // Handle input changes
  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      toast.error("Please connect your wallet");
      open();
      return;
    }
    if (!isPriceReady) {
      toast.error("Please wait for the package price to load");
      return;
    }
    if (isPriceError) {
      toast.error("Error loading package price");
      return;
    }
    try {
      // Format phone number with country code
      const fullPhoneNumber = `${
        formData.countryCode
      }${formData.phoneNumber.replace(/\D/g, "")}`;
      console.log({ formData, fullPhoneNumber });
      // Call contract register function
      await registerUser({
        _name: formData.name,
        _email: formData.email,
        _phone: fullPhoneNumber,
        _position: formData.position === "left" ? 0 : 1,
        _package: formData.package,
        _ref: formData.ref,
      });
      toast.success("Registered successfully");
      window.location.reload();
    } catch (error: any) {
      console.error("Registration failed:", error);
      toast.error(
        "Registration failed: " + error?.message || error || "Unknown error"
      );
    }
  };
  return (
    <div className="min-h-screen px-2 py-2 bg-gradient-to-b from-[#12021c] to-[#1a0329]">
      {/* <Header /> */}
      <div className="container mx-auto px-4 py-8">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4c51ff]/20 rounded-full blur-3xl" />

        <Card className="glass-card max-w-7xl mx-auto p-8">
          <h1 className="text-4xl font-bold text-center mb-12 gradient-text">
            Join now
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <Label className="mb-2">Name</Label>
                  <Input
                    placeholder="Enter your name"
                    className="glass-card"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    required
                  />
                </div>

                <div>
                  <Label className="mb-2">Email</Label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="glass-card"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    required
                  />
                </div>

                <div>
                  <Label className="mb-2">Mobile Number</Label>
                  <div className="flex gap-2">
                    <CountryCodeSelect
                      value={formData.countryCode}
                      onChange={(code) =>
                        setFormData((prev) => ({ ...prev, countryCode: code }))
                      }
                    />
                    <Input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="glass-card flex-1"
                      value={formData.phoneNumber}
                      onChange={handleInputChange("phoneNumber")}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-4 block">Choose position</Label>
                  <RadioGroup
                    value={formData.position}
                    onValueChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        position: value as "left" | "right",
                      }))
                    }
                    className="flex gap-8"
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="left"
                        id="left"
                        className="h-5 w-5"
                      />
                      <Label htmlFor="left" className="text-lg">
                        Left
                      </Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="right"
                        id="right"
                        className="h-5 w-5"
                      />
                      <Label htmlFor="right" className="text-lg">
                        Right
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <SelectPackage
                value={formData.package}
                onChange={(value) => {
                  setPackageIndex(value);
                  setFormData((prev) => ({ ...prev, package: value }));
                }}
                disabled={status !== "idle"}
              />
            </div>
            <div className="text-center mt-5">
              <p>
                selected package price:{" "}
                {packagePrice.usdt > 0 ? Number(b2f(packagePrice.usdt)) : 0.0}{" "}
                USDT
              </p>
              <p>
                amount to pay:{" "}
                {packagePrice.xee > 0
                  ? Number(
                      b2f(packagePrice.xee, Number(tokenInfo?.decimals || 0))
                    )
                  : 0.0}{" "}
                XEE{" "}
              </p>
              <p>
                your current balance:{" "}
                {b2f(xeeBalanceData || 0, Number(tokenInfo?.decimals || 0))} XEE
              </p>
              <Dialog>
                <DialogTrigger className="glass-button px-4 mt-5">
                  swap usdt to xee
                </DialogTrigger>
                <DialogContent className="p-0 border-none">
                  {/* <VisuallyHidden> */}
                  <DialogTitle className="text-xl font-bold sr-only">
                    Swap USDT to XEE
                  </DialogTitle>
                  {/* </VisuallyHidden> */}
                  <SwapSection />
                </DialogContent>
              </Dialog>
            </div>

            <Button
              type="submit"
              className={`${
                isConnected ? "bg-purple-500 " : "glass-button "
              }rounded-xl w-48 h-12 mt-5 font-semibold mx-auto block`}
              disabled={status !== "idle"}
            >
              {status === "idle" && <>Register</>}
              {status === "approving" && <>Approving...</>}
              {status === "registering" && <>Processing...</>}
              {status === "reading-price" && <>Processing...</>}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
