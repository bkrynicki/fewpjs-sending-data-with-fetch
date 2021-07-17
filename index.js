// Add your code here
let body = document.querySelector("body");
const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name: "Steve",
    email: "steve@steve.com",
  }),
};
function submitData() {
  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then(function (object) {
      body.append(object.id);
    })
    .catch(function (error) {
      alert(`Unauthorized Access`);
      body.append(error.message);
    });
}
