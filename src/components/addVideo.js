function AddVideo() {
  return (
    <>
      <form className="flex-row bg-black  justify-center align-middle ">
        <h1 className="text-white text-center text-4xl justify-center">
          YouTube
        </h1>
        <input className="m-8 justify-center" type="text" name="title" placeholder="title" />
        <input className="m-8 justify-center" type="text" name="views" placeholder="views" />
        <button class="text-center  text-xl text-white bg-gray-800  hover:bg-gray-700 rounded-md justify-center">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddVideo;
