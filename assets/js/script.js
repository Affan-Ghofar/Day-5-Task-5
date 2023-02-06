function getData() {

    // Delaclaration Variable DOM Selection
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let description = document.getElementById('description').value

    // Conditional
    if (name == "") {
        alert("Nama harus di isi dahulu!")
    } else if (email == "") {
        alert("Email harus di isi")
    } else if (phone == "") {
        alert("Nomor HP harus di isi")
    } else if (subject == "") {
        alert("Subject harus di isi")
    } else if (description == "") {
        alert("Your Message harus di isi")
    }

    // Sending Email
    const defaultEmail = "affanghofar35@gmail.com"

    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Hello My Name ${name}, ${description}, Let's Talk with me on My Number ${phone}`
    mailTo.click()

    let audience = {
        name,
        email,
        phone,
        subject,
        description
    }

    console.log(audience)

}