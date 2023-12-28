import React from "react";
import FormWrapper from "./FormWrapper";

type AddOnsProps = {
  isMonthly: boolean;
  addOns?: { id: string; label: string; price: number }[];
};

type AddOnsFormProps = AddOnsProps & {
  updateFormData: (field: Partial<AddOnsProps>) => void;
};

function AddOnsForm({ addOns, isMonthly }: AddOnsFormProps) {
  return (
    <FormWrapper
      formId="multi-step-form"
      title="Pick add-ons"
      subtitle="Add-ons help enhance your gaming experience."
    >
      <div className="flex h-full w-full flex-col">
        <label className="flex items-center gap-4 rounded-lg p-4 font-ubuntuMedium text-base ring-1 ring-light-gray transition-colors hover:cursor-pointer hover:ring-purplish-blue has-[:checked]:bg-light-gray/20 has-[:focus-visible]:ring-4 has-[:checked]:ring-purplish-blue has-[:focus-visible]:ring-purplish-blue">
          <input
            type="checkbox"
            className="peer relative h-5 w-5 appearance-none rounded-sm ring-1 ring-light-gray checked:bg-purplish-blue disabled:bg-slate-400 disabled:ring-slate-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="9"
            viewBox="0 0 12 9"
            className="absolute ml-1 origin-center scale-0 transition-transform peer-checked:scale-100"
          >
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="m1 4 3.433 3.433L10.866 1"
            />
          </svg>
          <span className="flex flex-col">
            Online Services
            <span className="font-ubuntuRegular text-sm text-cool-gray">
              Access to multiplayer games
            </span>
          </span>
        </label>
      </div>
    </FormWrapper>
  );
}

export default AddOnsForm;
