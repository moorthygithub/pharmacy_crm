import {
  COUNTRY_API,
  COUNTRYPORT_API,
  PORT_API,
  PRERECEIPTS_API,
  SCHEME_API,
  STATE_API,
} from "@/constants/apiConstants";
import { useGetApiMutation } from "@/hooks/useGetApiMutation";

const MASTER_APIS = {
  port: { url: PORT_API.active, queryKey: ["port-active"] },
  country: { url: COUNTRY_API.active, queryKey: ["country-active"] },
  state: { url: STATE_API.active, queryKey: ["state-active"] },
  prereceipt: { url: PRERECEIPTS_API.active, queryKey: ["prerecepit-active"] },
  scheme: { url: SCHEME_API.active, queryKey: ["scheme-active"] },
  countryPort: {
    url: COUNTRYPORT_API.active,
    queryKey: ["countryport-active"],
  },
};

const useMasterQueries = (keys = Object.keys(MASTER_APIS), enabled = true) => {
  const result = {};

  keys.forEach((key) => {
    const { url, queryKey } = MASTER_APIS[key];
    const query = useGetApiMutation({
      url,
      queryKey,
      options: { enabled }, 
    });
    result[key] = query;
  });

  return result;
};

export default useMasterQueries;
