CREATE TABLE energy_sources (
	
    country VARCHAR,
    year INT, 
    region VARCHAR,
    total_energy_production FLOAT, 
    total_energy_consumption FLOAT,
    cO2_emissions FLOAT,
    oil_products_consumption FLOAT,
    refined_oil_products_production FLOAT,
    natural_gas_production FLOAT,
    natural_gas_consumption FLOAT,
    coal_lignite_production FLOAT, 
    coal_lignite_consumption FLOAT,
    crude_oil_production FLOAT,
    share_wind_solar_electricity_production FLOAT,
    share_renewables_electricity_production FLOAT,
    share_electricity_final_energy_consumption FLOAT,
    average_CO2_factor FLOAT,
    cO2_PPP FLOAT,
    energy_intensity_GDP_PPP FLOAT,
    electricity_production FLOAT,
    electricity_consumption FLOAT
);

SELECT * FROM energy_sources; 


CREATE TABLE lat_long (
	
    country_cod VARCHAR, 
	latitude FLOAT, 
	longitude FLOAT, 
	country	VARCHAR, 
	usa_state_code VARCHAR, 
	usa_state_latitude FLOAT, 
	usa_state_longitude FLOAT, 
	usa_state VARCHAR

);


SELECT * FROM lat_long; 


SELECT *
FROM energy_sources
INNER JOIN lat_long ON energy_sources.country=lat_long.country;
