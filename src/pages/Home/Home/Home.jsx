import CountUp from "react-countup";
import useParcels from "../../../hooks/useParcel";
import useUsers from "../../../hooks/useUsers";
import TopDeliveryMen from "./TopDeliveryMen";


const Home = () => {

	const [users,refetch] = useUsers();
	if (!users) {
		return <div>Loading...</div>; // Or a loading spinner
	}
	
	console.log(users);
	const [parcels] = useParcels();
	if (!parcels) {
		return <div>Loading...</div>; // Or a loading spinner
	}
	
	console.log(parcels);
	const deliveredParcels =parcels.filter((parcel)=>parcel.status ==='Delivered');
	return (
		<div className="mb-0">
			<div className="home-container1">
				{/* banner */}
				<div
					className="bg-white pt-16 pr-4 pb-16 pl-4 mr-auto ml-auto items-center lg:flex-row lg:py-32 xl:py-48 md:px-8 flex
    flex-col relative">
					<div
						className="justify-center items-center w-full h-full lg:w-1/2 lg:justify-end lg:bottom-0 lg:left-0 lg:items-center
      flex">
						
						<img
							src="https://i.ibb.co/QQNwrT0/delivary.webp"
							className="object-contain object-top w-full h-auto lg:w-auto
        lg:h-full"
						/>
					</div>
					<div className="mr-auto ml-auto justify-end xl:pr-32 lg:max-w-screen-xl flex relative max-w-xl">
						<div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
							<div className="mb-6 max-w-xl">
								<div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none mb-6 max-w-lg">
									<p className="text-gray-900 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
										We Deliver your parcel
									</p>
									<p
										className="text-gray-900 text-3xl font-bold tracking-tight mr-2 sm:text-4xl sm:leading-none
              inline-block">
										fast
									</p>
									<p
										className="text-blue-700 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none
              inline-block">
										Anywhere
									</p>
								</div>
								<p className="text-gray-700 text-base md:text-lg">
									Trust us with your parcel we will deliver it
									super fast
									<br />
									across the country in quickest possible time
									and&nbsp;
									<br />
									reduced fee
								</p>
							</div>
							<div className="md:flex-row flex flex-col">
								<input
									type="text"
									placeholder="Parcel Id"
									fontFamily="Raleway"
									className="focus:border-blue-700 focus:outline-none
            focus:shadow-outline flex-grow transition duration-200 appearance-none border-2 border-gray-300 md:mr-2
            text-black bg-white font-normal w-full h-12 text-xs rounded-md pt-3 pr-4 pb-3 pl-4 mb-2 shadow-sm"
								/>
							</div>
							<div className="items-center mt-4 mr-0 mb-0 ml-0 flex flex-row-reverse">
								<button
									fontFamily="Arial"
									type="submit"
									className="transition duration-200 hover:bg-blue-900 focus:shadow-outline
            focus:outline-none inline-flex bg-blue-700 text-white font-semibold tracking-wide h-12 rounded-md shadow-md
            items-center justify-center pr-6 pl-6 mr-6">
									Search
								</button>
							</div>
						</div>
					</div>
				</div>



				{/* services */}
				<div className="bg-white pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8 lg:py-20">
					<div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mr-auto ml-auto w-full">
						<div className="mt-0 mr-auto mb-10 ml-auto max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
							<div
								className="mt-0 mr-auto mb-6 ml-auto text-3xl font-bold leading-none tracking-tight text-gray-900 max-w-lg
          font-sans sm:text-4xl md:mx-auto">
								<div className="inline-block relative">
									<p className="inline">
										<svg
											viewBox="0 0 52 24"
											fill="currentColor"
											className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20
                text-gray-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
											<defs>
												<pattern
													id="34f481be-159a-4846-821d-9ca19fb6bcc5"
													x="0"
													y="0"
													width=".135"
													height=".30">
													<circle
														cx="1"
														cy="1"
														r=".7"
													/>
												</pattern>
											</defs>
											<rect
												fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
												width="52"
												height="24"
											/>
										</svg>
									</p>
								</div>
								<p className="inline font-bold text-3xl tracking-tight font-sans sm:text-4xl sm:leading-none">
									World Class Services
								</p>
								<p className="text-3xl font-bold tracking-tight font-sans sm:text-4xl sm:leading-none"></p>
							</div>
							<p className="text-gray-700 text-base md:text-lg">
								Let us deliver for you
							</p>
						</div>
						<div className="mt-0 mr-0 mb-10 ml-0 grid gap-8  row-gap-8 lg:grid-cols-3">
							<div className="sm:text-center">
								<p
									className="text-blue-600 mt-0 mr-auto mb-4 ml-auto flex w-16 h-16 bg-blue-50 items-center justify-center
            rounded-full sm:w-24 sm:h-24">
									<svg
										viewBox="0 0 512 512"
										fill="currentColor"
										className="w-7"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="m511.4
              38.222c-1.109-20.338-17.284-36.511-37.622-37.621-41.038-2.242-121.342-.061-198.13 39.656-39.145
              20.248-80.545 54.577-113.584 94.185-.407.488-.803.979-1.207 1.468l-74.98 5.792c-12.342.954-23.335
              7.423-30.161 17.747l-51.154 77.372c-5.177 7.83-6 17.629-2.203 26.212 3.798 8.584 11.602 14.566 20.877
              16.003l63.171 9.784c-.223 1.228-.447 2.455-.652 3.683-2.103 12.58 2.065 25.514 11.151 34.599l87.992
              87.993c7.533 7.533 17.712 11.686 28.142 11.686 2.148 0 4.308-.177 6.458-.536 1.228-.205 2.455-.429
              3.683-.652l9.784 63.172c1.437 9.275 7.419 17.08 16.001 20.877 3.571 1.58 7.35 2.36 11.112 2.36 5.283-.001
              10.529-1.539 15.101-4.562l77.372-51.155c10.325-6.827 16.793-17.82
              17.745-30.161l5.792-74.979c.489-.404.981-.8 1.469-1.207 39.609-33.039 73.939-74.439 94.186-113.585
              39.719-76.791 41.896-157.096 39.657-198.131zm-175.394 393.037-74.011 48.933-9.536-61.565c31.28-9.197
              62.223-23.927 91.702-43.66l-3.773 48.845c-.235 3.047-1.833 5.762-4.382
              7.447zm-129.895-37.377-87.993-87.993c-2.245-2.246-3.283-5.401-2.774-8.44 2.616-15.643 6.681-30.534
              11.713-44.562l132.028 132.028c-16.848 6.035-31.939 9.635-44.534
              11.741-3.044.506-6.195-.529-8.44-2.774zm-117.923-222.269 48.844-3.773c-19.734 29.479-34.464 60.422-43.661
              91.702l-61.564-9.535 48.934-74.012c1.686-2.55 4.401-4.147 7.447-4.382zm270.155 155.286c-24.233
              20.213-47.756 34.833-69.438 45.412l-149.221-149.221c13.858-28.304 30.771-51.873 45.417-69.431
              30.575-36.655 68.602-68.276 104.331-86.756 70.474-36.453 144.725-38.416 182.713-36.348 5.028.274 9.027
              4.273 9.301 9.302 2.071 37.988.104 112.238-36.349 182.713-18.479 35.728-50.1 73.754-86.754 104.329z"
										/>
										<path
											d="m350.721 236.243c19.202-.002 38.412-7.312 53.031-21.931 14.166-14.165 21.966-32.999
              21.966-53.031s-7.801-38.866-21.966-53.031c-29.242-29.243-76.822-29.241-106.062 0-14.166 14.165-21.967
              32.999-21.967 53.031s7.802 38.866 21.967 53.031c14.622 14.622 33.822 21.933 53.031
              21.931zm-31.82-106.781c8.772-8.773 20.295-13.159 31.818-13.159 11.524 0 23.047 4.386 31.819 13.159 8.499
              8.499 13.179 19.799 13.179 31.818s-4.68 23.32-13.179 31.819c-17.544 17.545-46.093 17.544-63.638
              0-8.499-8.499-13.18-19.799-13.18-31.818s4.682-23.32 13.181-31.819z"
										/>
										<path
											d="m15.301 421.938c3.839 0
              7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213
              0l-48.972 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.928 2.929 6.767 4.394 10.606 4.394z"
										/>
										<path
											d="m119.761 392.239c-5.857-5.858-15.355-5.858-21.213 0l-94.154 94.155c-5.858 5.858-5.858 15.355 0 21.213
              2.929 2.929 6.767 4.393 10.606 4.393s7.678-1.464 10.606-4.394l94.154-94.154c5.859-5.858
              5.859-15.355.001-21.213z"
										/>
										<path
											d="m143.429 437.12-48.973 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.929
              2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355
              0-21.213-5.857-5.858-15.355-5.858-21.212 0z"
										/>
									</svg>
								</p>
								<p className="leading-5 font-bold mb-2">
									Very Fast Delivery
								</p>
								<p className="text-sm text-gray-900 max-w-md sm:mx-auto mb-3">
									We are super fast on our delivery
									<br />
									same day delivery on selected locations
									<div>Next day delivery countrywide</div>
								</p>
							</div>
							<div className="sm:text-center">
								<p
									className="text-blue-600 mt-0 mr-auto mb-4 ml-auto flex w-16 h-16 bg-blue-50 items-center justify-center
            rounded-full sm:w-24 sm:h-24">
									<svg
										viewBox="0 0 512 512"
										fill="currentColor"
										className="w-7"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="m511.4
              38.222c-1.109-20.338-17.284-36.511-37.622-37.621-41.038-2.242-121.342-.061-198.13 39.656-39.145
              20.248-80.545 54.577-113.584 94.185-.407.488-.803.979-1.207 1.468l-74.98 5.792c-12.342.954-23.335
              7.423-30.161 17.747l-51.154 77.372c-5.177 7.83-6 17.629-2.203 26.212 3.798 8.584 11.602 14.566 20.877
              16.003l63.171 9.784c-.223 1.228-.447 2.455-.652 3.683-2.103 12.58 2.065 25.514 11.151 34.599l87.992
              87.993c7.533 7.533 17.712 11.686 28.142 11.686 2.148 0 4.308-.177 6.458-.536 1.228-.205 2.455-.429
              3.683-.652l9.784 63.172c1.437 9.275 7.419 17.08 16.001 20.877 3.571 1.58 7.35 2.36 11.112 2.36 5.283-.001
              10.529-1.539 15.101-4.562l77.372-51.155c10.325-6.827 16.793-17.82
              17.745-30.161l5.792-74.979c.489-.404.981-.8 1.469-1.207 39.609-33.039 73.939-74.439 94.186-113.585
              39.719-76.791 41.896-157.096 39.657-198.131zm-175.394 393.037-74.011 48.933-9.536-61.565c31.28-9.197
              62.223-23.927 91.702-43.66l-3.773 48.845c-.235 3.047-1.833 5.762-4.382
              7.447zm-129.895-37.377-87.993-87.993c-2.245-2.246-3.283-5.401-2.774-8.44 2.616-15.643 6.681-30.534
              11.713-44.562l132.028 132.028c-16.848 6.035-31.939 9.635-44.534
              11.741-3.044.506-6.195-.529-8.44-2.774zm-117.923-222.269 48.844-3.773c-19.734 29.479-34.464 60.422-43.661
              91.702l-61.564-9.535 48.934-74.012c1.686-2.55 4.401-4.147 7.447-4.382zm270.155 155.286c-24.233
              20.213-47.756 34.833-69.438 45.412l-149.221-149.221c13.858-28.304 30.771-51.873 45.417-69.431
              30.575-36.655 68.602-68.276 104.331-86.756 70.474-36.453 144.725-38.416 182.713-36.348 5.028.274 9.027
              4.273 9.301 9.302 2.071 37.988.104 112.238-36.349 182.713-18.479 35.728-50.1 73.754-86.754 104.329z"
										/>
										<path
											d="m350.721 236.243c19.202-.002 38.412-7.312 53.031-21.931 14.166-14.165 21.966-32.999
              21.966-53.031s-7.801-38.866-21.966-53.031c-29.242-29.243-76.822-29.241-106.062 0-14.166 14.165-21.967
              32.999-21.967 53.031s7.802 38.866 21.967 53.031c14.622 14.622 33.822 21.933 53.031
              21.931zm-31.82-106.781c8.772-8.773 20.295-13.159 31.818-13.159 11.524 0 23.047 4.386 31.819 13.159 8.499
              8.499 13.179 19.799 13.179 31.818s-4.68 23.32-13.179 31.819c-17.544 17.545-46.093 17.544-63.638
              0-8.499-8.499-13.18-19.799-13.18-31.818s4.682-23.32 13.181-31.819z"
										/>
										<path
											d="m15.301 421.938c3.839 0
              7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213
              0l-48.972 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.928 2.929 6.767 4.394 10.606 4.394z"
										/>
										<path
											d="m119.761 392.239c-5.857-5.858-15.355-5.858-21.213 0l-94.154 94.155c-5.858 5.858-5.858 15.355 0 21.213
              2.929 2.929 6.767 4.393 10.606 4.393s7.678-1.464 10.606-4.394l94.154-94.154c5.859-5.858
              5.859-15.355.001-21.213z"
										/>
										<path
											d="m143.429 437.12-48.973 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.929
              2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355
              0-21.213-5.857-5.858-15.355-5.858-21.212 0z"
										/>
									</svg>
								</p>
								<p className="leading-5 font-bold mb-2">
									Money Back on Damage
								</p>
								<p className="text-sm text-gray-900 max-w-md sm:mx-auto mb-3">
									Fear of losing your parcel
									<br />
									or getting it damaged
									<br />
									only we provide full refund on damaged
									parcel
								</p>
							</div>
							<div className="sm:text-center">
								<p
									className="text-blue-600 mt-0 mr-auto mb-4 ml-auto flex w-16 h-16 bg-blue-50 items-center justify-center
            rounded-full sm:w-24 sm:h-24">
									<svg
										viewBox="0 0 512 512"
										fill="currentColor"
										className="w-7"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="m511.4
              38.222c-1.109-20.338-17.284-36.511-37.622-37.621-41.038-2.242-121.342-.061-198.13 39.656-39.145
              20.248-80.545 54.577-113.584 94.185-.407.488-.803.979-1.207 1.468l-74.98 5.792c-12.342.954-23.335
              7.423-30.161 17.747l-51.154 77.372c-5.177 7.83-6 17.629-2.203 26.212 3.798 8.584 11.602 14.566 20.877
              16.003l63.171 9.784c-.223 1.228-.447 2.455-.652 3.683-2.103 12.58 2.065 25.514 11.151 34.599l87.992
              87.993c7.533 7.533 17.712 11.686 28.142 11.686 2.148 0 4.308-.177 6.458-.536 1.228-.205 2.455-.429
              3.683-.652l9.784 63.172c1.437 9.275 7.419 17.08 16.001 20.877 3.571 1.58 7.35 2.36 11.112 2.36 5.283-.001
              10.529-1.539 15.101-4.562l77.372-51.155c10.325-6.827 16.793-17.82
              17.745-30.161l5.792-74.979c.489-.404.981-.8 1.469-1.207 39.609-33.039 73.939-74.439 94.186-113.585
              39.719-76.791 41.896-157.096 39.657-198.131zm-175.394 393.037-74.011 48.933-9.536-61.565c31.28-9.197
              62.223-23.927 91.702-43.66l-3.773 48.845c-.235 3.047-1.833 5.762-4.382
              7.447zm-129.895-37.377-87.993-87.993c-2.245-2.246-3.283-5.401-2.774-8.44 2.616-15.643 6.681-30.534
              11.713-44.562l132.028 132.028c-16.848 6.035-31.939 9.635-44.534
              11.741-3.044.506-6.195-.529-8.44-2.774zm-117.923-222.269 48.844-3.773c-19.734 29.479-34.464 60.422-43.661
              91.702l-61.564-9.535 48.934-74.012c1.686-2.55 4.401-4.147 7.447-4.382zm270.155 155.286c-24.233
              20.213-47.756 34.833-69.438 45.412l-149.221-149.221c13.858-28.304 30.771-51.873 45.417-69.431
              30.575-36.655 68.602-68.276 104.331-86.756 70.474-36.453 144.725-38.416 182.713-36.348 5.028.274 9.027
              4.273 9.301 9.302 2.071 37.988.104 112.238-36.349 182.713-18.479 35.728-50.1 73.754-86.754 104.329z"
										/>
										<path
											d="m350.721 236.243c19.202-.002 38.412-7.312 53.031-21.931 14.166-14.165 21.966-32.999
              21.966-53.031s-7.801-38.866-21.966-53.031c-29.242-29.243-76.822-29.241-106.062 0-14.166 14.165-21.967
              32.999-21.967 53.031s7.802 38.866 21.967 53.031c14.622 14.622 33.822 21.933 53.031
              21.931zm-31.82-106.781c8.772-8.773 20.295-13.159 31.818-13.159 11.524 0 23.047 4.386 31.819 13.159 8.499
              8.499 13.179 19.799 13.179 31.818s-4.68 23.32-13.179 31.819c-17.544 17.545-46.093 17.544-63.638
              0-8.499-8.499-13.18-19.799-13.18-31.818s4.682-23.32 13.181-31.819z"
										/>
										<path
											d="m15.301 421.938c3.839 0
              7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213
              0l-48.972 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.928 2.929 6.767 4.394 10.606 4.394z"
										/>
										<path
											d="m119.761 392.239c-5.857-5.858-15.355-5.858-21.213 0l-94.154 94.155c-5.858 5.858-5.858 15.355 0 21.213
              2.929 2.929 6.767 4.393 10.606 4.393s7.678-1.464 10.606-4.394l94.154-94.154c5.859-5.858
              5.859-15.355.001-21.213z"
										/>
										<path
											d="m143.429 437.12-48.973 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.929
              2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355
              0-21.213-5.857-5.858-15.355-5.858-21.212 0z"
										/>
									</svg>
								</p>
								<p className="leading-5 font-bold mb-2">
									Realtime Tracking
								</p>
								<p className="text-sm text-gray-900 max-w-md sm:mx-auto mb-3">
									Track your parcel in realtime
									<br />
									both you and your receiver
									<br />
									can track parcel
								</p>
							</div>
						</div>
					</div>
				</div>


				

				{/* Stats */}
				<div
					className="bg-white pt-16 pr-4 pb-16 pl-4 mr-auto ml-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full md:px-24 lg:px-8
    lg:py-20">
					<div className="grid grid-cols-1 md:grid-cols-3 ">
						<div className="text-center md:border-r">
							<p className="text-center text-4xl mb-2 font-bold text-blue-700 lg:text-5xl xl:text-6xl">
							<CountUp  start={0} end={parcels.length} duraation={2}   useEasing={true}/>
							</p>
							<p className="text-center text-sm font-medium tracking-widest text-gray-800 lg:text-base uppercase">
								Parcels Booked
							</p>
						</div>
						<div className="text-center md:border-r">
							<p className="text-center text-4xl mb-2 font-bold text-blue-700 lg:text-5xl xl:text-6xl">
							 <CountUp  start={0} end= {deliveredParcels.length} duraation={2} />
							</p>
							<p className="text-center text-sm font-medium tracking-widest text-gray-800 lg:text-base uppercase">
								Delivered parcels
							</p>
						</div>
						<div className="text-center md:border-r">
							<p className="text-center text-4xl mb-2 font-bold text-blue-700 lg:text-5xl xl:text-6xl">
							<CountUp end = {users.length}duraation={2}/>
							</p>
							<p className="text-center text-sm font-medium tracking-widest text-gray-800 lg:text-base uppercase">
								Clients
							</p>
						</div>
					</div>
				</div>
				{/* top delivery man */}
				<div className="w-full bg-white pt-16 pr-4 pb-16 pl-4 mt-0 mr-auto mb-0 ml-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20">
					{/* <div className="mt-0 mr-auto mb-10 ml-auto max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
						<div className="mt-0 mr-auto mb-6 ml-auto text-3xl font-bold leading-none text-gray-900 max-w-lg font-sans tracking-tight sm:text-4xl md:mx-auto">
							<div className="inline-block relative"></div>
							<p className="inline"></p>
							<p
								className="text-3xl font-bold leading-none text-gray-900 inline max-w-lg font-sans tracking-tight sm:text-4xl
          md:mx-auto">
								Meet our top
								<br />
								Delivery Men
								<br />
							</p>
						</div>
						<p className="text-base text-gray-700 md:text-lg">
							Lets appreciate there efforts
						</p>
					</div> */}
					{/* card grid */}
					{/* <div className="grid mt-0 mr-auto mb-0 ml-auto gap-10 row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
						<div className="flex flex-col shadow rounded-lg">
							<img
								src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								className=" object-cover mb-5 rounded-lg  h-48"
							/>

							<div className="p-4 flex justify-center flex-col">
								<p className="text-lg font-bold">Mac Xenon</p>
							</div>

							<div className="p-4 flex justify-between">
								<div className="">
									<p className="text-3xl font-bold">20</p>
									<p className="text-base">Rating</p>
								</div>
								<div className="">
									<p className="text-3xl font-bold">10</p>
									<p className="text-base">Delivered</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col shadow rounded-lg">
							<img
								src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								className=" object-cover mb-5 rounded-lg  h-48"
							/>

							<div className="p-4 flex justify-center flex-col">
								<p className="text-lg font-bold">Mac Xenon</p>
							</div>

							<div className="p-4 flex justify-between">
								<div className="">
									<p className="text-3xl font-bold">20</p>
									<p className="text-base">Rating</p>
								</div>
								<div className="">
									<p className="text-3xl font-bold">10</p>
									<p className="text-base">Delivered</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col shadow rounded-lg">
							<img
								src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								className=" object-cover mb-5 rounded-lg  h-48"
							/>

							<div className="p-4 flex justify-center flex-col">
								<p className="text-lg font-bold">Mac Xenon</p>
							</div>

							<div className="p-4 flex justify-between">
								<div className="">
									<p className="text-3xl font-bold">20</p>
									<p className="text-base">Rating</p>
								</div>
								<div className="">
									<p className="text-3xl font-bold">10</p>
									<p className="text-base">Delivered</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col shadow rounded-lg">
							<img
								src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								className=" object-cover mb-5 rounded-lg  h-48"
							/>

							<div className="p-4 flex justify-center flex-col">
								<p className="text-lg font-bold">Mac Xenon</p>
							</div>

							<div className="p-4 flex justify-between">
								<div className="">
									<p className="text-3xl font-bold">20</p>
									<p className="text-base">Rating</p>
								</div>
								<div className="">
									<p className="text-3xl font-bold">10</p>
									<p className="text-base">Delivered</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col shadow rounded-lg">
							<img
								src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								className=" object-cover mb-5 rounded-lg  h-48"
							/>

							<div className="p-4 flex justify-center flex-col">
								<p className="text-lg font-bold">Mac Xenon</p>
							</div>

							<div className="p-4 flex justify-between">
								<div className="">
									<p className="text-3xl font-bold">20</p>
									<p className="text-base">Rating</p>
								</div>
								<div className="">
									<p className="text-3xl font-bold">10</p>
									<p className="text-base">Delivered</p>
								</div>
							</div>
						</div>
					</div> */}
					<div>
						<TopDeliveryMen/>
					</div>
				</div>
			</div>
	
		</div>
	);
};

export default Home;
