import React, { useState, useEffect } from "react";
import logo from "@edx/brand/logo.svg";
import { Button, Container, Col } from "@edx/paragon";
import Row from "react-bootstrap/Row";
import axios from "axios";

import CourseCard from "../cards/Card";

import img from "../../assets/photo-1496267472830-2eb2b7e0942d.jpeg";

import "./Landing-page.scss";

const LandingPage = () => {
  const [data, setData] = useState(null);
  const [courseCount, setCourseCount] = useState(4);

  const update_data = async function () {
    const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];
    let BASE_URL_PUBLIC = "";

    /* offline */
    if (LOCAL_DOMAINS.includes(window.location.hostname)) {
      BASE_URL_PUBLIC =
        "http://edx-new-theme.localhost/api/courses/v1/courses/";
    } else {
      /* online || production && staging */
      BASE_URL_PUBLIC = "/api/courses/v1/courses/";
    }

    const result = await axios(BASE_URL_PUBLIC, {
      params: { page_size: 100 },
    });
    setData(result.data.results);
  };

  const loadMorePets = () => {
    setCourseCount(data.length);
  };

  useEffect(() => {
    update_data();
  }, []);

  return (
    <main>
      <Container size="xl" className="my-4">
        <h2>Our courses</h2>
        <Row>
          {data?.slice(0, courseCount).map((data) => (
            <Col key={data.id} sm={6} xs={12}>
              <CourseCard key={data.id} {...data} />
            </Col>
          ))}
        </Row>
        {data?.length > 4 ? (
          <Button onClick={loadMorePets}>Load more</Button>
        ) : (
          <></>
        )}
      </Container>
    </main>
  );
};

export default LandingPage;
