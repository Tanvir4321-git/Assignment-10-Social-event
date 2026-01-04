import React, { useRef, useContext } from "react";
import { Authcontext } from "./Context/Authcontext";
import { toast } from "react-toastify";

const Modal = () => {
  const modalRef = useRef(null);
  const { updateuserProfile ,user} = useContext(Authcontext);

  const handleModal = () => {
    modalRef.current.showModal();
  };

  const handleupdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    updateuserProfile({ name, photo })
      .then(() => {
        toast('profile updated')
        modalRef.current.close(); 
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <button onClick={handleModal} className="btn">
        Update Profile
      </button>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <form onSubmit={handleupdate} className="card-body">
            <h1 className="text-2xl text-center my-3 font-bold">
              Update Profile
            </h1>

            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
              placeholder="Your name"
              defaultValue={user?.displayName}
            />

            {/* Photo */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input input-bordered"
              placeholder="Photo URL"
                defaultValue={user?.photoURL}
            />

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => modalRef.current.close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
