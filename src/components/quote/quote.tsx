import { useState } from "react";
import styles from "./quote.module.css";
import { Button, Snackbar, Alert } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { TextField, Box } from "@mui/material";

interface FileData {
  fileName: string;
  base64Content: string;
}

export default function Quote() {
  const EmailInfo = "dpsdasilva@hotmail.com";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [description, setDescription] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [open, setOpen] = useState(false);
  const [snackbarData, setSnackbarData] = useState({
    severity: "success" as "success" | "error" | "warning" | "info",
    message: "",
    time: 4000,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(event.target.value);
    };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      if (selectedFiles.length > 5) {
        setError("Você pode selecionar no máximo 5 arquivos.");
        return;
      }
      setFiles(selectedFiles);
      setError(null);
    }
  };

  const convertFilesToBase64 = async (files: File[]): Promise<FileData[]> => {
    const filePromises = files.map((file) => {
      return new Promise<FileData>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64String = (reader.result as string).split(",")[1];
          resolve({ fileName: file.name, base64Content: base64String });
        };
        reader.onerror = (error) => reject(error);
      });
    });
    return Promise.all(filePromises);
  };

  const phoneMask = (value: string) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    let valid = true;
    if (!name) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }
    if (name.length < 4) {
      setNameError("Name must have at least 4 letters");
      valid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
      setEmailError("Invalid email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!phone) {
      setPhoneError("Phone is required");
      valid = false;
    } else {
      setPhoneError("");
    }
    if (phone.length < 14) {
      setPhoneError("Invalid phone number");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!address) {
      setAddressError("Address is required");
      valid = false;
    } else {
      setAddressError("");
    }

    if (!description) {
      setDescriptionError("Description is required");
      valid = false;
    } else {
      setDescriptionError("");
    }

    if (!valid) return;

    const filesData = await convertFilesToBase64(files);
    const requestBody = {
      to: EmailInfo,
      subject: `Requested Quote - ${name}`,
      body: `\n From: ${name} \n Email: ${email} \n Phone: ${phone} \n Address: ${address} \n\n Description: \n ${description}`,
      files: filesData,
    };

    try {
      const response = await fetch("https://mccapi.up.railway.app/api/Email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os arquivos.");
      }

      setSnackbarData({
        severity: "success",
        message: "Quote Sent Successfully!",
        time: 4000,
      });
      handleOpen();

      setFiles([]);
    } catch {
      setSnackbarData({
        severity: "error",
        message: "Failed to send quote.",
        time: 4000,
      });
      handleOpen();
    }
  };
  return (
    <div className={styles.requestQuote}>
      <div className={styles.imgContainer}></div>
      <div className={styles.formContainer}>
        <h2>Request a Quote</h2>
        <h3>
          Fill out the form below, and we&apos;ll reach out to you as soon as
          possible. Let&apos;s work together to bring your projects to life!
        </h3>

        <Box
          component="form"
          className={styles.form}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className={styles.name}>
            <TextField
              value={name}
              label="Name"
              name="name"
              variant="outlined"
              onChange={handleChange(setName)}
              fullWidth
              required
              error={!!nameError}
              helperText={nameError}
              autoComplete="name"
            />
          </div>

          <div className={styles.email}>
            <TextField
              value={email}
              label="Email"
              name="email"
              variant="outlined"
              onChange={handleChange(setEmail)}
              fullWidth
              required
              error={!!emailError}
              helperText={emailError}
              autoComplete="email"
            />
          </div>

          <div className={styles.phone}>
            <TextField
              value={phone}
              label="Phone"
              name="phone"
              variant="outlined"
              onChange={(event) => setPhone(phoneMask(event.target.value))}
              fullWidth
              required
              error={!!phoneError}
              helperText={phoneError}
              autoComplete="phone"
            />
          </div>

          <div className={styles.address}>
            <TextField
              value={address}
              label="Address"
              name="address"
              variant="outlined"
              onChange={handleChange(setAddress)}
              fullWidth
              required
              error={!!addressError}
              helperText={addressError}
              autoComplete="address"
            />
          </div>

          <div className={styles.description}>
            <TextField
              value={description}
              label="Description"
              name="description"
              variant="outlined"
              onChange={handleChange(setDescription)}
              fullWidth
              required
              error={!!descriptionError}
              helperText={descriptionError}
              autoComplete="description"
              multiline
              rows={4}
            />
          </div>

          <div className={styles.uploadFilesContainer}>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="file-upload"
            />
            <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
              <Button
                fullWidth
                variant="contained"
                color="warning"
                component="span"
                startIcon={<FiUpload />}
              >
                Upload Files
              </Button>
            </label>
            {error && <div className={styles.error}>{error}</div>}
            {files.length > 0 && (
              <div className={styles.fileList}>
                {files.map((file, index) => (
                  <p style={{ fontSize: "0.7rem" }} key={index}>
                    {file.name}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className={styles.quoteFooter}>
            <button type="submit" className={styles.buttonStyledBlue}>
              Submit Request &nbsp; <FaArrowRight />
            </button>
          </div>
        </Box>

        <Snackbar
          open={open}
          autoHideDuration={snackbarData.time}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={snackbarData.severity}
            sx={{ width: "100%" }}
          >
            {snackbarData.message}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
