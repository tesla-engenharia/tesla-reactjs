import React from "react";

import MediaQuery from "react-responsive";

import "react-toastify/dist/ReactToastify.css";
import "~/styles/toast.css";

import "~/styles/loading.css";

import { Content, Info, DetailWrapper, Title, Job } from "./styles";

export default function Detail({ service }) {
  return (
    <DetailWrapper>
      <MediaQuery query="(max-width: 600px)">
        <Title>{service.title}</Title>
      </MediaQuery>
      <MediaQuery query="(min-width: 600px)">
        <Title big>{service.title}</Title>
      </MediaQuery>
      <Info>
        <strong>{service.departament}</strong>
      </Info>
      <Content>{service.long_description}</Content>

      <MediaQuery query="(max-width: 600px)">
        <Title>Alguns de nossos serviços</Title>
      </MediaQuery>
      <MediaQuery query="(min-width: 600px)">
        <Title big>Alguns de nossos serviços</Title>
      </MediaQuery>
      <div className="portfolio">
        {service.jobs &&
          service.jobs.map(job => (
            <Job>
              <img
                src={process.env.REACT_APP_API_URL + "/files/" + job.file_id}
                alt="Imagem do serviço"
              />
              <strong>{job.title}</strong>
            </Job>
          ))}
      </div>
    </DetailWrapper>
  );
}
