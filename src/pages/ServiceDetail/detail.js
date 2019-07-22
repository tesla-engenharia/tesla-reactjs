import React from "react";

import MediaQuery from "react-responsive";

import "react-toastify/dist/ReactToastify.css";
import "~/styles/toast.css";

import "~/styles/loading.css";

import {
  Content,
  Info,
  DetailWrapper,
  Title,
  Portfolio,
  Job,
  JobInfo,
  JobTitle,
  JobDescription
} from "./styles";

import { Helmet } from "react-helmet";

export default function Detail({ service }) {
  const { title, departament, long_description, jobs } = service;
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
  const empty = isEmpty(jobs);
  return (
    <DetailWrapper>
      <Helmet>
        <title>Tesla Engenharia | {title}</title>
      </Helmet>
      <MediaQuery query="(max-width: 600px)">
        <Title>{title}</Title>
      </MediaQuery>
      <MediaQuery query="(min-width: 600px)">
        <Title big>{title}</Title>
      </MediaQuery>
      <Info>
        <strong>{departament}</strong>
      </Info>
      <Content>{long_description}</Content>

      {empty ? (
        ""
      ) : (
        <>
          <MediaQuery query="(max-width: 600px)">
            <Title>Alguns de nossos projetos</Title>
          </MediaQuery>
          <MediaQuery query="(min-width: 600px)">
            <Title big>Alguns de nossos projetos</Title>
            <h1>{jobs.job}</h1>
          </MediaQuery>
          <Portfolio>
            {jobs &&
              jobs.map(job => (
                <Job>
                  <img
                    src={
                      process.env.REACT_APP_API_URL + "/files/" + job.file_id
                    }
                    alt="Imagem do serviço"
                  />
                  <JobInfo>
                    <JobTitle>
                      <strong>{job.title}</strong>
                    </JobTitle>
                    <JobDescription>{job.description}</JobDescription>
                  </JobInfo>
                </Job>
              ))}
          </Portfolio>
        </>
      )}
    </DetailWrapper>
  );
}
