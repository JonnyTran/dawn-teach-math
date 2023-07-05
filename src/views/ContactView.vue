<template>
  <div>
    <contact>
    <h1>Contact</h1>
    </contact>
    <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="15362813-1203-485a-b258-4227d01d0bd6">
      <input type="hidden" name="subject" value="New Submission">
      <input type="hidden" name="from_name" value="Tran Teach Math">
      <input type="hidden" name="redirect" value="https://web3forms.com/success">
      <input type="checkbox" name="botcheck" id="" style="display: none;">
      
      <name>
      <label for="name">Name:</label>
      <input type="text" name="name" v-model="form.name" required> 
      </name>
      <email>
      <label for="email">Email:</label>
      <input type="email" name="email" v-model="form.email" required>
      </email>
      <subject>
      <label for="subject">Subject:</label>
      <input type="text" name="Inquiry" v-model="form.subject" required>
      </subject>
      <message>
      <label for="message">Message:</label>
      <textarea name="message" v-model="form.message" required></textarea>
      </message>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
const WEB3FORMS_ACCESS_KEY = "15362813-1203-485a-b258-4227d01d0bd6";
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
      async submitForm() {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          console.log(result);
        }
      },
    },
  };
  </script>

<style>
contact {
  position: absolute;
  top: 15.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  font-weight: 450;
  color: #02150aa7;
}

form {
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height:600px;
  width: 450px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #000000;
  padding: 10px;
  border-bottom: 6px solid #02150aa7;
  border-right: 4px solid #02150aa7;
}

form label {
  margin: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 5px;
}

form name, textarea {
  display: flex;
  align-self: center;
  flex-direction: column;
  height: 90px;
  width: 90%;
  margin-bottom: 10px;
}

form email, textarea {
  display: flex;
  align-self: center;  align-self: center;
  flex-direction: column;
  height: 90px;
  width: 90%;
  margin-bottom: 10px;
}

form subject, textarea {
  display: flex;
  align-self: center;
  flex-direction: column;
  height: 90px;
  width: 90%;
  margin-bottom: 10px;
}

form message, textarea {
  display: flex;
  align-self: center;
  flex-direction: column;
  height: 200px;
  width: 95%;
  border-radius: 6px;
  margin-bottom: 10px;
}

form button {
  align-self: center;
  width: 50%;
  height: 50px;
  border: 2.5px solid rgba(37, 89, 211, 0.738);
  border-radius: 8px;
  color: rgb(37, 89, 211);
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;
}

form button:hover {
  background: rgb(37, 89, 211);
  color: #ffffff;
  border: 2px solid #ffffff;
  font-size: 1.12rem;
}

form button:focus {
  outline: none;
}

form button:active {
  transform: scale(0.98);
}




</style>
