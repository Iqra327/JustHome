import profile from "../../../assets/imgs/profile.webp";
import Form from "./Form";

const Setting = () => {

  return (
    <div className="p-7 w-full max-w-5xl mx-auto mt-14 flex flex-col justify-center items-center shadow-lg bg-white border">
      <div className="w-full max-w-52 flex flex-col items-center gap-3">
        <div className="rounded-full w-32 h-32 border">
          <img
            src={profile}
            alt="profile"
            className="rounded-full w-32 h-32 object-cover border"
          />
        </div>
        <button className="text-lg">Change Profile</button>
      </div>

      {/* Personal Info Form */}
      <Form />
    </div>
  );
};

export default Setting;
