import { useForm } from "react-hook-form";
import "./Styles/Form.css";

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="rsvp-container">
      <div className="image-container">
        <img
          className="rsvp-image"
          src="../images/hip-hop-concert-flyer-english-443476958.png"
          alt="painting of a man"
        ></img>
      </div>

      <div className="form-container">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-fields-container"
        >
          {/* register your input into the hook by invoking the "register" function */}
          <label>Name</label>
          <input
            className="form-input"
            defaultValue=""
            {...register("example")}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <label>Address</label>
          <input
            className="form-input"
            {...register("exampleRequired", { required: true })}
          />

          {/* register your input into the hook by invoking the "register" function */}
          <label>Phone Number</label>
          <input
            className="form-input"
            defaultValue=""
            {...register("example")}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <label>Tickets</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input className="form-input" type="submit" />
        </form>
      </div>
    </div>
  );
};
