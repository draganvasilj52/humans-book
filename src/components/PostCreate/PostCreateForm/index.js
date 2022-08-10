import { useState, useRef, useEffect } from "react";
import { db, storage } from "../../firebase/config";
import { uploadBytes } from "firebase/storage";
import { useSelector } from "react-redux";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { arrayUnion } from "firebase/firestore";
import CloseIcon from "@mui/icons-material/Close";
import { grey, green } from "@mui/material/colors";
import { ref } from "firebase/storage";
import CollectionsIcon from "@mui/icons-material/Collections";

const PostCreateForm = ({ setCreatePost }) => {
  const imageRef = useRef();
  const inputRef = useRef();

  const [imageData, setImageData] = useState(null);
  // const [textValidity, setTextValidity] = useState(false);
  // const [imgValidity, setImgValidity] = useState(false);
  const [inputFileVisible, setInputFileVisible] = useState(true);
  const [textData, setTextData] = useState("");

  const user = useSelector((state) => state.data.user);

  const refHandler = () => {
    imageRef.current.click();
  };

  const handleText = (e) => {
    if (e.target.value !== "") {
      setTextData(e.target.value);
    }
  };
  //NERADI
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  console.log(imageData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let photoURL = "";

    if (imageData) {
      const filePath = `postImages/${user.uid}/${imageData.name}`;
      const storageRef = ref(storage, filePath);
      await uploadBytes(storageRef, imageData);

      photoURL = await getDownloadURL(ref(storage, filePath));
    }

    await addDoc(collection(db, "blogs"), {
      title: user.displayName,
      time: "1h",
      description: textData,
      userId: user.id,
      imageURL: photoURL,
    });

    const washingtonRef = doc(db, "users", `${user.id}`);
    await updateDoc(washingtonRef, {
      posts: arrayUnion({
        title: user.displayName,
        time: "1h",
        description: textData,
        userId: user.id,
        imageURL: photoURL,
      }),
    });
    setTextData("");

    imageRef.current.value = "";
    setImageData(null);

    setCreatePost(false);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4 mx-4 pb-4'>
      <div className='flex flex-col '>
        <div className='h-10 px-4 my-4 flex items-center'>
          <img
            className='h-full'
            src={`${user.photoURL}`}
            alt=''
            style={{ borderRadius: "50%" }}
          />
          <p className='text-base pl-3'>{user.displayName}</p>
        </div>

        <input
          ref={inputRef}
          onChange={handleText}
          value={textData}
          type='text'
          className='w-full pt-1 pb-2 text-base rounded-3xl border-0 focus:ring-0 p-0'
          placeholder={`What's your thoughts, ${user.displayName}?`}
        />
      </div>

      <input
        onChange={(e) => setImageData(e.target.files[0])}
        className='bg-gray-200'
        style={{ display: "none" }}
        type='file'
        ref={imageRef}
        accept='.jpg,.jpeg,.png'
      />

      {inputFileVisible && (
        <div className='border-gray-300 border p-3 rounded h-56 relative'>
          <div
            onClick={refHandler}
            className='bg-gray-100 hover:bg-gray-200 rounded p-6 cursor-pointer h-full flex items-center justify-center'>
            Add photos/videos
          </div>
          <div
            onClick={() => setInputFileVisible(false)}
            className='rounded-full border border-gray-200 w-7 h-7 hover:bg-gray-200 cursor-pointer flex items-center justify-center absolute right-5 top-5'>
            <CloseIcon sx={{ fontSize: 20, color: grey[600] }} />
          </div>
        </div>
      )}

      <div className='flex items-center p-2 space-x-56 border-gray-300 border rounded'>
        <p className='text-base cursor-pointer'>Add</p>

        <div
          onClick={() => setInputFileVisible(true)}
          className='rounded-full border border-gray-200 w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100'>
          <CollectionsIcon sx={{ fontSize: 24, color: green[500] }} />
        </div>
      </div>

      <button
        type='submit'
        className={` w-full text-center p-4 text-white bg-blue-600  font-medium `}>
        Create
      </button>
    </form>
  );
};

export default PostCreateForm;
// disabled={!imgValidity && !textValidity}> disabled:bg-gray-100 disabled:text-gray-400
