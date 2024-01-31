import Button from "./Button";
import { TextField } from "./Input";
import { Textarea } from "./Input";

export default function ContactForm() {
  return (
    <div className="flex flex-col lg:flex-row bg-black-90 lg:m-3 lg:gap-12">
      <div>
        <h2>Contact Us</h2>
        <p>Loren epson</p>
        <p>abc@gmail.com</p>
        <p>123-456-789</p>
      </div>
      <div>
        <form className="flex flex-row">
          <TextField type="text" placeholder="Name" variant="input_white" />
          <TextField type="email" placeholder="Email" variant="input_white" />
        </form>
        <form className="flex flex-row">
          <TextField type="text" placeholder="Phone" variant="input_white" />
          <TextField type="text" placeholder="Address" variant="input_white" />
        </form>
        <form action="">
          <Textarea placeholder="Address" variant="input_white" />
        </form>
      </div>
      <div className="lg:flexCenter hidden">
        <Button type="button" title="Submit" variant="btn_dark_green" />
      </div>
    </div>
  )
}
