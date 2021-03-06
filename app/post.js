async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        alert('Ops! Ocorreu algum erro...')
        window.location.href = "index.html";
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
    window.location.href = "success.html";
    return response.json();
}

async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = form.action;

    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({ url, formData });
        

        console.log({ responseData });
    } catch (error) {
        console.error(error);
    }
}

const exampleForm = document.getElementById("example-form");
exampleForm.addEventListener("submit", handleFormSubmit);