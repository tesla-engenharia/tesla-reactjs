import React, { Component } from "react";

import { Container } from "./styles";

import api from "~/services/api";

import { FaCloudUploadAlt } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class UparImagem extends Component {
  state = {
    file: null,
    fileUploaded: null
  };

  handleChangeFile = e => {
    this.setState({ file: e.target.files[0] });
  };

  handleFileUpload = async e => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("file", this.state.file);
      const response = await api.post("/files", fd, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("@Tesla:token"),
          "Content-Type": "multipart/form-data"
        }
      });
      this.setState({ fileUploaded: response.data });
    } catch (err) {
      toast.warn("Algo deu errado");
    }
  };

  render() {
    return (
      <Container>
        <form>
          <input type="file" onChange={this.handleChangeFile} required />
          <button type="submit" onClick={this.handleFileUpload}>
            <FaCloudUploadAlt />
          </button>
        </form>
        {this.state.fileUploaded && (
          <p>
            Acesse{" "}
            <a
              href={this.state.fileUploaded.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.state.fileUploaded.url}
            </a>
          </p>
        )}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
