import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";

const CategoryDetails = () => {
  const { category } = useParams(); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); 
        console.log("Token:", token);
        // if (!token) {
        //     console.error("No token found in localStorage. Redirecting to login.");
        //     // Redirect user to login if token is missing
        //     window.location.href = "/signup-user";
        // }
        console.log(`Fetching data for category: ${category}`);
        console.log(`API URL: https://backend-bcolar.onrender.com/api/service/getByCategory?category=${encodeURIComponent(category)}`);

        const response = await Axios.get(
          `https://backend-bcolar.onrender.com/api/service/getByCategory?category=${encodeURIComponent(
            category
          )}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <h2>{category}</h2>
      <List>
        {data.map((item) => (
          <Item key={item.id}>
            <img src={item.productPic} alt="" />

            <div className="itemText">
                <h3>{item.title}</h3>
                <h3>{item.category}</h3>
                <p>{item.description}</p>
            </div>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default CategoryDetails;

const Container = styled.div`
  padding: 20px;
  max-width: 1400px;
  margin: auto;
  border: 1px solid;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #0000ff;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* flex-direction: column; */
  gap: 40px;
`;

const Item = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  display: flex;
  gap: 30px;
  /* justify-content: space-between; */
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  img{
    width: 200px;
   border-radius: 10px;
  }
  h3 {
    font-size: 18px;
    color: #0000ff;
  }

  p {
    font-size: 14px;
    color: #333;
  }
  @media (max-width:920px) {
    width: 350px;
    img{
    width: 170px;
  }
  }
  @media (max-width:800px) {
    width: 300px;
    gap: 20px;
    img{
    width: 150px;
  }
  h3{
    font-size: 16px;
  }
  }
  @media (max-width:715px) {
    width: 400px;
    img{
    width: 200px;
  }
  h3 {
    font-size: 18px;
  }
  }
  @media (max-width:520px) {
    width: 350px;
    img{
    width: 170px;
  }
  }
  @media (max-width:410px) {
    width: 300px;
    gap: 20px;
    img{
    width: 150px;
  }
  h3{
    font-size: 16px;
  }
  }
`;
