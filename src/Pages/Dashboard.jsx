import { FaChartLine, FaChartBar, FaChartArea, FaChartPie } from "react-icons/fa";
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { Row, Col, Card } from "antd";
import "./Dashboard.css";

const Dashboard = () => {

    const stats = [
        { title: "Today Sale", icon: <FaChartLine /> },
        { title: "Total Sale", icon: <FaChartBar /> },
        { title: "Today Revenue", icon: <FaChartArea /> },
        { title: "Total Revenue", icon: <FaChartPie /> },
    ];

    const worldwideSalesData = [
        { name: "2016", IKORODU: 40, AGRIC: 30, EBUTE: 20 },
        { name: "2017", IKORODU: 50, AGRIC: 40, EBUTE: 30 },
        { name: "2018", IKORODU: 60, AGRIC: 50, EBUTE: 40 },
        { name: "2019", IKORODU: 70, AGRIC: 60, EBUTE: 50 },
        { name: "2020", IKORODU: 80, AGRIC: 70, EBUTE: 60 },
        { name: "2021", IKORODU: 90, AGRIC: 80, EBUTE: 70 },
        { name: "2022", IKORODU: 100, AGRIC: 90, EBUTE: 80 },
    ];

    const salesRevenueData = [
        { name: "2016", Sales: 90, Revenue: 80 },
        { name: "2017", Sales: 100, Revenue: 120 },
        { name: "2018", Sales: 70, Revenue: 60 },
        { name: "2019", Sales: 150, Revenue: 140 },
        { name: "2020", Sales: 200, Revenue: 180 },
        { name: "2021", Sales: 300, Revenue: 250 },
        { name: "2022", Sales: 400, Revenue: 350 },
    ];

    return (
        <div className="dashboard-container">
            <Row gutter={[16, 16]} className="stats-row">
                {stats.map((stat, index) => (
                    <Col xs={24} sm={12} md={6} key={index}>
                        <Card className="stat-card">
                            <div className="stat-content">

                                <div className="stat-icon">{stat.icon}</div>

                                <div className="stat-text">
                                    <h5>{stat.title}</h5>
                                    <h2>$1234</h2>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row gutter={[16, 16]} className="charts-row">
                <Col xs={24} md={12}>
                    <Card className="chart-card">
                        <h5>Worldwide Sales</h5>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={worldwideSalesData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <RechartsTooltip />
                                <Legend />
                                <Bar dataKey="IKORODU" fill="#8884d8" />
                                <Bar dataKey="AGRIC" fill="#82ca9d" />
                                <Bar dataKey="EBUTE" fill="#ffc658" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>


                <Col xs={24} md={12}>
                    <Card className="chart-card">
                        <h5>Sales & Revenue</h5>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={salesRevenueData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <RechartsTooltip />
                                <Legend />
                                <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
                                <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
