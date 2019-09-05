import React from "react";

import MediaQuery from "react-responsive";

import "react-toastify/dist/ReactToastify.css";
import "~/styles/toast.css";

import "~/styles/loading.css";

import {
  Content,
  DetailWrapper,
  Title,
  Title2,
  Portfolio,
  Job,
  JobInfo,
  JobTitle,
  JobDescription
} from "./styles";

import { Helmet } from "react-helmet";

export default function Detail({ service }) {
  const { title, long_description, jobs } = service;
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
      <Content>{long_description}</Content>

      {empty ? (
        ""
      ) : (
        <>
          <MediaQuery query="(max-width: 600px)">
            <Title2>Alguns de nossos projetos</Title2>
          </MediaQuery>
          <MediaQuery query="(min-width: 600px)">
            <Title2 big>Alguns de nossos projetos</Title2>
            <h1>{jobs.job}</h1>
          </MediaQuery>
          <Portfolio>
            {jobs &&
              jobs.map(job => (
                <>
                  <MediaQuery query="(max-width: 600px)">
                    <Job itemtype="https://schema.org/Service">
                      <img
                        itemprop="image"
                        src={
                          process.env.REACT_APP_API_URL +
                          "/files/" +
                          job.file_id
                        }
                        alt="Imagem do serviço"
                      />
                      <JobInfo>
                        <JobTitle>
                          <strong itemprop="name">{job.title}</strong>
                        </JobTitle>
                        <JobDescription itemprop="description">
                          {job.description}
                        </JobDescription>
                      </JobInfo>
                    </Job>
                  </MediaQuery>

                  <MediaQuery query="(min-width: 600px)">
                    <Job big itemtype="https://schema.org/Service">
                      <img
                        itemprop="image"
                        src={
                          process.env.REACT_APP_API_URL +
                          "/files/" +
                          job.file_id
                        }
                        alt="Imagem do serviço"
                      />
                      <JobInfo>
                        <JobTitle>
                          <strong itemprop="name">{job.title}</strong>
                        </JobTitle>
                        <JobDescription itemprop="description">
                          {job.description}
                        </JobDescription>
                      </JobInfo>
                    </Job>
                  </MediaQuery>
                </>
              ))}
          </Portfolio>
        </>
      )}
    </DetailWrapper>
  );
}
