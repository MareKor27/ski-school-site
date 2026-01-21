import { useForm } from "react-hook-form";
import { QuickContactDto } from "~/features/adminPanel/api/type/quickContact.dto";
import { sendQuickContact } from "./ContactFormApi";

export const useCalendar = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useForm<QuickContactDto>({
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const sendEmail = async (form: QuickContactDto) => {
    const result = await sendQuickContact(form);
    console.log(result);
  };

  return {
    isSubmitting,
    isSubmitSuccessful,
    sendEmail,
    register,
    handleSubmit,
  } as const;
};
