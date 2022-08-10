import { removePeopleFromMessengerArray } from '../../features/dataSlice'
import { useDispatch } from 'react-redux/es/exports'
import { useState } from 'react'

const ContactsModal = ({ item, index }) => {
  const dispatch = useDispatch()
  const [iconHovered, setIconHovered] = useState(false)

  return (
    <>
      {index <= 1 ? (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className={`fixed h-456 w-328 ${index === 0 && ' right-6 bottom-0'} ${
            index === 1 && 'right-80 bottom-0 '
          } `}
        >
          <div className=" relative p-4 w-full h-full ">
            <div className=" relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-center p-2 rounded-t border-b dark:border-gray-600">
                <div
                  className="h-9 w-9 bg-cover"
                  style={{
                    backgroundImage: `url(${item.photoURL})`,
                    borderRadius: '50%',
                  }}
                />
                <p className="text-base pl-2">{item.displayName}</p>
                <button
                  onClick={() => dispatch(removePeopleFromMessengerArray(item))}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-white w-full h-full flex flex-col p-6">
              <div className="h-5/6"></div>
              <div className="h-2/12 ">
                <input type="text" className="bg-gray-300 w-3/6 rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="defaultModal"
          style={{ borderRadius: '50%' }}
          tabIndex="-1"
          aria-hidden="true"
          onMouseEnter={() => setIconHovered(true)}
          onMouseLeave={() => setIconHovered(false)}
          className={`fixed ${index === 2 && ' right-0 bottom-8'}  `}
        >
          <div
            className="h-12 w-12 bg-cover"
            style={{
              backgroundImage: `url(${item.photoURL})`,
              borderRadius: '50%',
            }}
          />
          {iconHovered && (
            <>
              <div className="absolute top-3 right-14 bg-gray-100 h-3">
                <p className="">{item.displayName}</p>
              </div>

              <button
                onClick={() => dispatch(removePeopleFromMessengerArray(item))}
                type="button"
                className="absolute top-0 left-6 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xs p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default ContactsModal
