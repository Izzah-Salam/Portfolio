import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2031fdbf-c07e-4a2f-9f09-a292a95ed5db");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Your message has been sent successfully.",
        draggable: true,
        confirmButtonColor: "#009E67", // Direct color change (hex/rgb)
        customClass: {
          confirmButton: "custom-ok-btn", // Apply Tailwind/CSS class
        },
      });

      console.log("Success", res);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col bg-inherit  md:pt-40 pt-20 pb-20  text-white ">
      <h1
        id="contact"
        className="font-bold lg:text-6xl md:text-5xl text-3xl mb-4 "
      >
        Contact Me
      </h1>
      <p className="mb-10 md:text-sm  text-xs text-gray-300">
        Any Question? Please Fill out the Form Below
      </p>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 md:w-[500px] w-[300px]"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          name="name"
          className="border border-gray-300 rounded-md p-2 text-gray-300 bg-transparent"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          name="email"
          className="border border-gray-300 rounded-md p-2 text-gray-300 bg-transparent"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          name="message"
          required
          className="border border-gray-300 rounded-md p-2 text-gray-300 bg-transparent"
        ></textarea>
        <button
          type="submit"
          className="bg-[#009E67] text-white px-4 py-2 rounded mt-6 md:text[16px] text-sm "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
