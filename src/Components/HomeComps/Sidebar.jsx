import styled from "styled-components";
const Sidebar = () => {
    return ( <SidebarDiv>

    <CategorySearch>

    <input type="search"  placeholder= "Search"/>

        <li>Barbers</li>
        <li>Bricklayers</li>
        <li>Carpenters</li>
        <li>Electricians</li>
        <li>Hairdressers</li>
        <li>Mechanics</li>
        <li>Painters</li>
        <li>Solar Engineers</li>
        <li>Tailors</li>
        <li>Welders</li>

    </CategorySearch>

    </SidebarDiv> );
}
 
export default Sidebar;

const SidebarDiv = styled.div`
    input{
        width: 200px;
        height: 50px;
        margin: 0px auto;
        border-radius: 10px;
        border: none;
        background-color: #e7e7e7;

    }
`
const CategorySearch = styled.div`
    width: 250px;
    padding: 0px 20px;
    li{
        list-style: none;
        font-size: 20px;
        width: 200px;
        border-radius: 10px;
            padding: 15px;
        &:hover{
            background-color: #E0E1E0; 
        }
    }
    @media (max-width:890px) {
   display: none;
  }

`