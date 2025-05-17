
// import { useQuery } from '@tanstack/react-query';
// import ReactApexChart from 'react-apexcharts';
// import useAxiosSecure from '../../../../hooks/useAxiosSecure';
// import { Helmet } from 'react-helmet-async';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// const Statistics = () => {
//     const axiosSecure = useAxiosSecure();

//     const { data: chartData = [], refetch } = useQuery({
//         queryKey: ['chart'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/chartData');
//             // console.log(res.data);
//             return res.data;
//         }
//     });

//     // Prepare data for ApexCharts
//     const series = [
//         {
//             name: 'Booking Count',
//             data: chartData.map(item => item.bookingCount),
//         }
//     ];

//     const options = {
//         chart: {
//             type: 'bar',
//             toolbar: {
//                 show: false,
//             },
//         },
//         xaxis: {
//             categories: chartData.map(item => item.date),
//             title: {
//                 text: 'Date',
//             },
//         },
//         yaxis: {
//             title: {
//                 text: 'Booking Count',
//             },
//         },
//         colors: colors,
//         plotOptions: {
//             bar: {
//                 borderRadius: 4,
//                 horizontal: false,
//                 distributed: true,
//             },
//         },
//         dataLabels: {
//             enabled: true,
//         },
//         grid: {
//             strokeDashArray: 4,
//         },
//     };

//     return (
//         <>
//          <Helmet>
//                 <title>Dashboard | Statistics</title>
//             </Helmet>
//         <div className="w-full h-full p-4">
//             <ReactApexChart options={options} series={series} type="bar" height={400} />
//         </div>

//         </>
//     );
// };

// export default Statistics;



import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import { FaBoxOpen, FaBoxes, FaCalendarCheck, FaStar } from 'react-icons/fa';

const Statistics = () => {
    const axiosSecure = useAxiosSecure();

    const { data: chartData = [] } = useQuery({
        queryKey: ['chart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/chartData');
            return res.data;
        }
    });

    // Mock data for summary cards (replace with actual API data)
    const summaryData = {
        totalDelivered: 23,
        totalBooked: 32,
        pendingDelivery: 5,
        averageRating: 4.6,
    };

    // Prepare data for charts
    const bookingSeries = [{
        name: 'Bookings',
        data: chartData.map(item => item.bookingCount),
    }];

    const deliverySeries = [{
        name: 'Deliveries',
        data: chartData.map(item => item.deliveryCount || Math.floor(item.bookingCount * 0.8)), // Mock delivery data
    }];

    const barChartOptions = {
        chart: {
            type: 'bar',
            toolbar: { show: false },
            fontFamily: 'Inter, sans-serif',
        },
        xaxis: {
            categories: chartData.map(item => item.date),
            title: { text: 'Date' },
            labels: { style: { colors: '#6b7280', fontSize: '12px' } }
        },
        yaxis: {
            title: { text: 'Count' },
            labels: { style: { colors: '#6b7280', fontSize: '12px' } }
        },
        colors: ['#3b82f6', '#10b981'],
        plotOptions: {
            bar: {
                borderRadius: 6,
                columnWidth: '70%',
            },
        },
        dataLabels: { enabled: false },
        grid: {
            borderColor: '#e5e7eb',
            strokeDashArray: 4,
        },
        tooltip: {
            theme: 'light',
            style: {
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
            },
        },
    };

    const lineChartOptions = {
        ...barChartOptions,
        chart: { type: 'line', toolbar: { show: false } },
        stroke: {
            width: [3, 3],
            curve: 'smooth'
        },
        markers: {
            size: 5,
            colors: ['#3b82f6', '#10b981'],
            strokeWidth: 0,
        },
    };

    return (
        <>
            <Helmet>
                <title>Dashboard | Statistics</title>
            </Helmet>
            
            <div className="p-6 space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SummaryCard 
                        icon={<FaBoxOpen className="text-blue-500" size={24} />}
                        title="Total Delivered"
                        value={summaryData.totalDelivered}
                        change="+12% from last month"
                        color="bg-blue-50"
                    />
                    <SummaryCard 
                        icon={<FaBoxes className="text-green-500" size={24} />}
                        title="Total Booked"
                        value={summaryData.totalBooked}
                        change="+8% from last month"
                        color="bg-green-50"
                    />
                    <SummaryCard 
                        icon={<FaCalendarCheck className="text-yellow-500" size={24} />}
                        title="Pending Delivery"
                        value={summaryData.pendingDelivery}
                        change="+5% from last month"
                        color="bg-yellow-50"
                    />
                    <SummaryCard 
                        icon={<FaStar className="text-purple-500" size={24} />}
                        title="Average Rating"
                        value={summaryData.averageRating}
                        change="+0.2 from last month"
                        color="bg-purple-50"
                        isRating={true}
                    />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Trends</h3>
                        <ReactApexChart 
                            options={barChartOptions} 
                            series={bookingSeries} 
                            type="bar" 
                            height={320} 
                        />
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Delivery Performance</h3>
                        <ReactApexChart 
                            options={lineChartOptions} 
                            series={deliverySeries} 
                            type="line" 
                            height={320} 
                        />
                    </div>
                </div>

                {/* Additional Stats Section */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                            <h4 className="text-sm font-medium text-gray-500">Most Popular Day</h4>
                            <p className="text-xl font-semibold mt-1">Wednesday</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                            <h4 className="text-sm font-medium text-gray-500">Peak Hour</h4>
                            <p className="text-xl font-semibold mt-1">2:00 - 4:00 PM</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                            <h4 className="text-sm font-medium text-gray-500">Delivery Success Rate</h4>
                            <p className="text-xl font-semibold mt-1">98.2%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Summary Card Component
const SummaryCard = ({ icon, title, value, change, color, isRating = false }) => {
    return (
        <div className={`${color} dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100`}>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <p className="text-2xl font-bold mt-1">
                        {isRating ? (
                            <span className="flex items-center">
                                {value} <span className="text-yellow-500 ml-1">★</span>
                            </span>
                        ) : (
                            value.toLocaleString()
                        )}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">{change}</p>
                </div>
                <div className="p-3 rounded-lg bg-white bg-opacity-50">
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default Statistics;