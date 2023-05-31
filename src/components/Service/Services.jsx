import React from "react";
import {MdDesignServices} from "react-icons/md";
import {FiCodesandbox} from "react-icons/fi";
import {CgWebsite} from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import {Slide} from "react-awesome-reveal";

const Services = () => {
    return (
        <Container id="service">
            <Slide direction="down">
                    <span className="green">
                        <h1>My Skills</h1>
                       </span>


            </Slide>
            <Cards>
                <Slide direction="left">
                    <Card
                        Icon={MdDesignServices}
                        title={"Java Developer"}
                        disc={'Java based Services, Telegram Bots, Java EE projects '}
                    />
                </Slide>
                <Slide direction="up">
                    <Card
                        Icon={FiCodesandbox}
                        title={"Spring Developer"}
                        disc={`Spring projects, 
                   Spring MVC ,
                   Spring boot,
                   Microservices With Spring boots`}
                    />
                </Slide>
                <Slide direction="right">
                    <Card
                        Icon={CgWebsite}
                        title={"Data Base Developer"}
                        disc={`Working with Sql and NoSql Databases, Experienced with PostgreSQL`}
                    />
                </Slide>
            </Cards>
        </Container>
    );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
