export const ContactInformation = () => {
  return (
    <div className="bg-white py-6 my-4 rounded-lg pl-2  space-y-8 md:px-10 pr-2">
      <div className="text-sm">
        <h3 className="font-semibold">Contact Information</h3>
        <div>
          <div className="flex justify-between items-center border-b py-4 text-gray-600 border-gray-300">
            <p>First Name </p>
            <p>Nafisat</p>
          </div>
          <div className="flex justify-between items-center border-b py-4 text-gray-600 border-gray-300">
            <p>Last Name </p>
            <p>Doe</p>
          </div>
          <div className="flex justify-between items-center border-b py-4 text-gray-600 border-gray-300">
            <p>Email Address</p>
            <p>nafisatdoe@gmail.com</p>
          </div>
          <div className="flex justify-between items-center border-b py-4 text-gray-600 border-gray-300">
            <p>Phone Number</p>
            <p>07034983923</p>
          </div>
        </div>
      </div>
    </div>
  );
};
