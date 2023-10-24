import { Button, Card, Input, Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditJob=()=>{
    const {id}=useParams()
    const navigate = useNavigate()
    const [company,setCompany] = useState("");
    const [position,setPosition] = useState("");
    const [location, setWorkLocation] = useState("");
    const [workfrom, setLocationType] = useState("");
    const [edited, setEdited] = useState(false);
    const [deleted, setDeleted] = useState(false);


    useEffect(() => {
        getJob();
    }, []);

  const getJob = async () => {
    try {
      const response = await fetch(
        `http://localhost:5173/job/${id}`
      );
      const jsonData = await response.json();
      const { company, position, location, workfrom } = jsonData.job;
      setCompany(company);
      setPosition(position);
      setWorkLocation(location);
      setLocationType(workfrom);
    } catch (err) {
      console.error(err.message);
    }
  }

    const edit = async (e) => {
        e.preventDefault();
        try {
          const body = { company, position, location, workfrom };
          await fetch(`http://localhost:5173/updatejob/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          setEdited(true);
          setTimeout(() => {
            navigate("/jobs");
          }, 2000);
        } catch (err) {
          console.error(err.message);
        }
      }

      const handleDelete = async () => {
        try {
          await fetch(`http://localhost:5173/deletejob/${id}`, {
            method: "DELETE",
          });
    
          setDeleted(true);
          setTimeout(() => {
            navigate("/jobs");
          }, 2000);
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        <div>
            {edited &&
        (toast(" Job Edited Successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        }),
        (<ToastContainer />))}
      {deleted &&
        (toast(" Job Deleted Successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        }),
        (<ToastContainer />))}

        <Card
        color="white"
        shadow={true}
        className="p-10 flex justify-center items-center"
      >
        <Typography variant="h4" color="blue-gray">
          Edit Job
        </Typography>

        <Typography color="gray" className="mt-1 font-normal">
          Change the details you want to edit.
        </Typography>
        <form
          onSubmit={edit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              label="Company"
            />
            <Input
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              label="Position"
            />
            <Input
              value={location}
              onChange={(e) => setWorkLocation(e.target.value)}
              label="Location"
            />
            <Input
              value={workfrom}
              onChange={(e) => setLocationType(e.target.value)}
              label="WorkFrom"
            />
          </div>
          <Button type="submit" color="blue" className="mt-6" fullWidth>
            Edit
          </Button>
          <Button onClick={handleDelete} color="red" className="mt-6" fullWidth>
            Delete
          </Button>
        </form>
      </Card>
    </div>  
    )
}

export default EditJob