const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold m-2 p-2">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-gray-300 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
