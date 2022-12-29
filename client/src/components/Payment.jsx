import React from "react";
export default function Payment() {
  const [form, setForm] = React.useState({
    cvv: "",
    export_date: "",
    id_number: "",
    card_number: "",
  });

  // key -> 'name'
  const onChange = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <div style={{ marginTop: "40px" }}>
      <form> 
        <fieldset style={{ width: "30%", margin: "auto" }}>
          <legend>Payment</legend>
          <label htmlFor="id_number"> ID Number : </label>
          <input
            type="text"
            id="id_number"
            name="id_number"
            value={form.id_number}
            onChange={onChange("id_number")}
          />
          <br />
          <br />
          <label htmlFor="cvv"> Cvv : </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={form.cvv}
            onChange={onChange("cvv")}
          />
          <br />
          <br />

          <label htmlFor="export_date">Export Date : </label>
          <input
            type="date"
            id="export_date"
            name="export_date"
            value={form.export_date}
            onChange={onChange("export_date")}
          />
          <br />
          <br />
          <label htmlFor="card_number">Card Number : </label>
          <input
            type="text"
            id="card_number"
            name="card_number"
            value={form.card_number}
            onChange={onChange("card_number")}
          />
          <br />
          <br />
          <input type="submit" value="Pay" />
        </fieldset>
      </form>
    </div>
  );
}
