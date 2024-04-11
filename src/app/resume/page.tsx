import ResumeTemplate from "./resume";
import { commonArgs } from "../../configs/types";
import { IoPrintOutline } from "react-icons/io5";

function Resume(props: commonArgs) {
  const handlePrint = () => {
    const element = document.getElementById("print-content");
    if (element) {
      document.body.innerHTML = element.innerHTML;
      window.print();
      document.location.reload();
    } else {
      document.body.innerHTML = "Error in printing";
    }
  };

  const resume = (
    <ResumeTemplate lang={props.lang} theme={props.theme} slug={props.slug} />
  );

  return (
    <div className="bg-gray-100 font-sans p-8">
      <div className="bg-white  mx-auto rounded-lg shadow-md p-4 w-[60rem]">
        <IoPrintOutline
          onClick={handlePrint}
          className="top-5 left-4 fixed shadow-md hover:bg-blue-200 text-slate-800 font-bold p-2 w-12 h-12  rounded-full  focus:outline-none focus:shadow-outline"
        />
        {resume}
        <div id="print-content" className="hidden">
          {resume}
        </div>
      </div>
    </div>
  );
}

export default Resume;
