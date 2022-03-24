import data from "../../data/schools.json";
import { SchoolsInput } from "../../models";
import { slugify } from "../../utilities";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { Grid } from "@mui/material";
import Link from "next/link";

type HomeProps = {
  school: SchoolsInput;
};

function SchoolDetails({ school }: HomeProps) {
  return (
    <>
      <NextSeo title={school.schoolName} titleTemplate={school.schoolName} />
      <Container>
        <Head>
          <Title>{school.schoolName}</Title>
          <SubTitle>
            {school.district} District - {school.county} County
          </SubTitle>
          <SubTitle>Liberia</SubTitle>
          <Link href={"/"} passHref>
            <Anchor>Return to home page</Anchor>
          </Link>
        </Head>
        <Body
          container
          direction={"column"}
          sx={{ px: { xs: 0, sm: 1, md: 2, lg: 3 }, py: 3 }}
        >
          <Info>Description</Info>
          <Row item>
            <Item>
              EMIS
              <Value>{school.emisNumber}</Value>
            </Item>
            <Item>
              School Type
              <Value>{school.schoolType}</Value>
            </Item>
            <Item>
              Phone
              <Value>N/A</Value>
            </Item>

            <Item>
              Email
              <Value>N/A</Value>
            </Item>
            <Item>
              Address
              <Value>N/A</Value>
            </Item>
            <Item>
              Website
              <Value>N/A</Value>
            </Item>
          </Row>

          <Info>Additional Info</Info>
          <Row item>
            <Item>
              Senior High
              <Value>{school.shsSchool ? "Yes" : "None"}</Value>
            </Item>
            <Item>
              TVET School
              <Value>{school.tvetSchool ? "Yes" : "None"}</Value>
            </Item>
            <Item>
              ABE School
              <Value>{school.abeSchool ? "Yes" : "None"}</Value>
            </Item>

            <Item>
              Junior High
              <Value>{school.jhsSchool ? "Yes" : "None"}</Value>
            </Item>
            <Item>
              ALP School
              <Value>{school.alpSchool ? "Yes" : "None"}</Value>
            </Item>
            <Item>
              Elementary
              <Value>{school.primarySchool ? "Yes" : "None"}</Value>
            </Item>

            <Item>
              ECE School
              <Value>{school.eceSchool ? "Yes" : "None"}</Value>
            </Item>
          </Row>

          <Info>Facilities</Info>
          <Row item>
            <Item>
              Computer Lab
              <Value>N/A</Value>
            </Item>
            <Item>
              Gymnasium
              <Value>N/A</Value>
            </Item>
            <Item>
              Laboratory
              <Value>N/A</Value>
            </Item>
          </Row>

          <Info>Ratings</Info>
          <Row item>
            <Item>
              MOE
              <Value>N/A</Value>
            </Item>
            <Item>
              Football
              <Value>N/A</Value>
            </Item>

            <Item>
              WAEC
              <Value>N/A</Value>
            </Item>

            <Item>
              Basketball
              <Value>N/A</Value>
            </Item>

            <Item>
              Kickball
              <Value>N/A</Value>
            </Item>
            <Item>
              Public
              <Value>N/A</Value>
            </Item>
          </Row>
        </Body>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = data.map((obj) => ({
    params: {
      name: `${slugify(obj.schoolName)}`,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const school = data.find(
    (obj) => params.name === `${slugify(obj.schoolName)}`
  );
  return {
    props: { school },
  };
}

const Container = styled("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 60rem;
  width: 100%;
  height: 100%;
  box-shadow: 5px 10px 18px #888888;
  padding-bottom: 2rem;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Value = styled(SubTitle)`
  color: rgba(0, 46, 162, 1);
  margin: 0;
  font-size: 1rem;
`;

const Body = styled(Grid)`
  align-text: left;
  font-weight: 700;
  height: 100%;
  margin: 0 auto;
  font-size: 1rem;
`;

const Head = styled(Grid)`
  padding: 2rem 0;
  background: #002368;
  color: #fff;
  text-align: center;
`;

const Anchor = styled.a`
  cursor: pointer;
  border: 1px solid #fff;
  padding: 0.5rem 1rem;
  display: inline-block;
  font-size: 0.9rem;
  background: #fff;
  color: rgba(0, 46, 162, 1);
  font-weight: 700;

  &:visited {
    color: rgba(0, 0, 0, 0.87);
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Row = styled(Grid)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  border: 0.3px solid #002368;
  padding: 1rem;
`;

const Info = styled("h1")`
  padding: 0.5rem 1rem;
  display: inline-block;
  font-size: 1rem;
  background: #002368;
  color: #fff;
  font-weight: 700;
  margin: 0;
`;

const Item = styled("div")`
  margin: 0;
  padding: 0;
`;

export default SchoolDetails;
