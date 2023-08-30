import { useForm } from 'react-hook-form';
import './Styles/RsvpForm.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const RsvpForm = ({ ticketPrice, eventId }) => {
  const navigate = useNavigate();
  let ticketNo = 0;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const [ticketQuantity, setTicketQuantity] = useState(0);
  const onSubmit = async (data) => {
    const response = await axios
      .post('http://localhost:4000/rsvp', { ...data, eventId })
      .then((res) => res.data);
    alert(response);
    navigate('/');
  };

  const setQuantity = async (op) => {
    setTicketQuantity(op);
    console.log(ticketQuantity);
  };
  return (
    <div className='rsvp-container'>
      <div className='image-container'>
        <img
          className='rsvp-image'
          src='../images/hip-hop-concert-flyer-english-443476958.png'
          alt='painting of a man'
        ></img>
      </div>

      <div className='form-container'>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='form-fields-container'
        >
          {/* register your input into the hook by invoking the "register" function */}
          <label>Name</label>
          <input className='form-input' defaultValue='' {...register('name')} />

          {/* include validation with required or other standard HTML validation rules */}
          <label>Address</label>
          <input
            className='form-input'
            {...register('address', { required: true })}
          />

          {/* register your input into the hook by invoking the "register" function */}
          <label>Phone Number</label>
          <input
            className='form-input'
            defaultValue=''
            {...register('phoneNumber')}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <label>Tickets</label>
          <select
            onClick={() => {
              ticketNo = getValues('tickets');
            }}
            onChange={(option) => {
              ticketNo = option;
            }}
            {...register('tickets', { required: true })}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>

          <label> Total: </label>
          <p> {ticketNo * ticketPrice} </p>

          <input className='form-submit-btn' type='submit' />
        </form>
      </div>
    </div>
  );
};
