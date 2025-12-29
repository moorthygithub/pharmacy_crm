import { COUNTRY_API, PORT_API } from "@/constants/apiConstants";
import { useGetApiMutation } from "@/hooks/useGetApiMutation";

const useMasterQueries = () => {
  const PortList = useGetApiMutation({
    url: PORT_API.active,
    queryKey: ["port-active"],
  });
  const CountryList = useGetApiMutation({
    url: COUNTRY_API.active,
    queryKey: ["country-active"],
  });

  return {
    PortList,
    CountryList,
  };
};

export default useMasterQueries;
