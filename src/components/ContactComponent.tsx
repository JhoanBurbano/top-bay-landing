import { Controller, useForm } from "react-hook-form";
import { Contact } from "../interfaces/contact.interface";
import ReactSelect from "react-select";
import { ServicesOptions } from "../constants/services.constant";

const ContactComponent = () => {
  const { control, handleSubmit } = useForm<Contact>(
    {
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      }
    }
  );
  const onSubmit = async (data: Contact) => {
    console.log('data :>> ', data);
  };

  return (
    <form
      className="flex flex-col gap-4 w-[90%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="name"
        control={control}
        rules={{ required: "Name is required", minLength: { value: 3, message: 'Name is too short'}, pattern: { value: /^[A-Z a-z]+$/i, message: 'Invalid name'}}}
        render={({ field, fieldState: { error } }) => (
          <span className="flex flex-col gap-1">
            <input
              {...field}
              type="text"
              placeholder='Enter your name'
              className="p-2 rounded-lg"
            />
            {error && <span className="text-sm text-red-200">{error.message}</span>}
          </span>
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{ required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' }}}
        render={({ field, fieldState: { error } }) => (
          <span className="flex flex-col gap-1">
            <input
              {...field}
              type="text"
              placeholder='Enter your email'
              className="p-2 rounded-lg"
            />
            {error && <span className="text-sm text-red-200">{error.message}</span>}
          </span>
        )}
      />
            <Controller
        name="phone"
        control={control}
        rules={{ required: "Phone number is required", minLength: { value: 10, message: 'Phone number is too short'}, maxLength: { value: 10, message: 'Phone number is too long'}, pattern: { value: /^[0-9]+$/i, message: 'Invalid phone number'}}}
        render={({ field, fieldState: { error } }) => (
          <span className="flex flex-col gap-1">
            <input
              {...field}
              type="number"
              placeholder='Enter your phone number'
              className="p-2 rounded-lg"

            />
            {error && <span className="text-sm text-red-200">{error.message}</span>}
          </span>
        )}
      />


<Controller
        name="service"
        control={control}
        rules={{ required: "Service is required"}}
        render={({ field, fieldState: { error } }) => (
          <span className="flex flex-col gap-1">
      <ReactSelect
        options={ServicesOptions}
        placeholder="Select a service for contact"
        className="rounded-lg w-full"
        onChange={(option)=>field.onChange(option?.value)}
      />
            {error && <span className="text-sm text-red-200">{error.message}</span>}
          </span>
        )}
      />
      
      <Controller
        name="message"
        control={control}
        rules={{ required: "Message is required", minLength: { value: 10, message: 'Message is too short'}}}
        render={({ field, fieldState: { error } }) => (
          <span className="flex flex-col gap-1">
            <textarea
              {...field}
              placeholder="Enter your message here..."
              className="p-2 rounded-lg h-32 resize-none"
            />
            {error && <span className="text-sm text-red-200">{error.message}</span>}
          </span>
        )}
      />
      <button className="bg-black text-white font-bold py-2 rounded-lg hover:text-yellow-300 hover:bg-zinc-900">
        Send
      </button>
    </form>
  );
};

export default ContactComponent;
