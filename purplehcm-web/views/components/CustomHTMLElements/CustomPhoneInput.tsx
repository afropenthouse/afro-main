import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface PhoneNumberInputProps {
  id?: string;
  name?: string;
  required?: boolean;
  defaultValue?: string;
  extraLabel?: string;
  onChange?: (val: string) => void;
  onInfoClick?: () => void;
}

interface CountryCode {
  name?: string;
  code?: string;
  flag?: string;
  format?: string;
  placeholder?: string;
}

export default function CustomPhoneInput({
  onChange,
  onInfoClick,
  defaultValue,
  required,
  extraLabel,
  ...props
}: PhoneNumberInputProps) {
  const supportedCountries = useMemo(
    () => [
      {
        name: "Canada",
        code: "+1",
        flag: "ca",
        format: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
        placeholder: "123-456-7890",
      },
      {
        name: "Nigeria",
        code: "+234",
        flag: "ng",
        format: "[0-9]{3} [0-9]{3} [0-9]{4}",
        placeholder: "803-052-0715",
      },
    ],
    []
  );

  const [countryCode, setCountryCode] = useState<CountryCode>(supportedCountries[1]);
  const [phoneNumber, setPhoneNumber] = useState(""); // No longer initializing with defaultValue
  const [showDropDown, setShowDropDown] = useState(false);

  // Extract country code and phone number from defaultValue if present
  useEffect(() => {
    if (defaultValue) {
      const matchedCountry = supportedCountries.find((country) =>
        defaultValue.startsWith(country.code)
      );

      if (matchedCountry) {
        // Set the country code and remove it from the default phone number
        setCountryCode(matchedCountry);
        const strippedPhoneNumber = defaultValue.replace(matchedCountry.code, "");
        setPhoneNumber(strippedPhoneNumber);
      } else {
        // If no matching country, just use the defaultValue as the phone number
        setPhoneNumber(defaultValue);
      }
    }
  }, [defaultValue, supportedCountries]);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);

    // Call onChange prop with full phone number (country code + number)
    if (onChange) {
      onChange(`${countryCode?.code}${newPhoneNumber.replace(/[\s-]/g, "")}`);
    }
  };

  const handleDropDownToggleClick = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div>
      {extraLabel ? (
        <div className="text-[#394753] text-[14px] lg:leading-[14px] font-[500] mb-1.5">
          {extraLabel}
        </div>
      ) : null}
      <div className="flex items-center w-full">
        {/* Hidden input to store the full phone number */}
        <input
          type="hidden"
          readOnly
          value={`${countryCode?.code}${phoneNumber.replaceAll("-", "").replaceAll(" ", "")}`}
          {...props}
        />

        {/* Button & Tag */}
        <button
          className="flex items-center py-2 px-2 text-sm font-medium text-center text-gray-900 border border-purpleAsh rounded-[12px_0px_0px_12px] hover:bg-gray-200"
          type="button"
          onClick={handleDropDownToggleClick}
        >
          <div className="flex flex-1 items-center">
            <div className="w-8 h-4 rounded-lg relative">
              <Image
                src={`/images/flags/${countryCode?.flag}.svg`}
                alt={""}
                fill
              />
            </div>
            <p>{countryCode.code}</p>
          </div>
        </button>

        {/* Drop Down */}
        {showDropDown && (
          <div
            id="dropdown-phone"
            className="origin-top-left absolute left-50 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 p-2"
          >
            <ul className="text-sm text-gray-700">
              {supportedCountries?.map((item, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => {
                      setCountryCode(item);
                      setShowDropDown(false);
                    }}
                    className="py-2 w-full text-sm text-gray-900 bg-gray-50 hover:bg-gray-200"
                  >
                    <span className="inline-flex items-start w-full px-2 gap-2">
                      <Image
                        height={4}
                        width={8}
                        src={`/images/flags/${item?.flag}.svg`}
                        alt=""
                        className="rounded-lg"
                      />
                      {item.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Input */}
        <label
          htmlFor="phone-input"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Phone number:
        </label>

        <div className="relative flex-1">
          <input
            type="tel"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 border border-purpleAsh focus:outline-none focus:ring-0 focus:border-primaryColor rounded-[0px_12px_12px_0px] "
            pattern={countryCode?.format}
            placeholder={countryCode?.placeholder}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required={required}
          />
        </div>
      </div>
    </div>
  );
}
