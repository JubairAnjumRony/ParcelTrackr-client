
import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Statistics = () => {
    const axiosSecure = useAxiosSecure();

    const { data: chartData = [], refetch } = useQuery({
        queryKey: ['chart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/chartData');
            console.log(res.data);
            return res.data;
        }
    });

    // Prepare data for ApexCharts
    const series = [
        {
            name: 'Booking Count',
            data: chartData.map(item => item.bookingCount),
        }
    ];

    const options = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: chartData.map(item => item.date),
            title: {
                text: 'Date',
            },
        },
        yaxis: {
            title: {
                text: 'Booking Count',
            },
        },
        colors: colors,
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
                distributed: true,
            },
        },
        dataLabels: {
            enabled: true,
        },
        grid: {
            strokeDashArray: 4,
        },
    };

    return (
        <div className="w-full h-full p-4">
            <ReactApexChart options={options} series={series} type="bar" height={400} />
        </div>
    );
};

export default Statistics;
