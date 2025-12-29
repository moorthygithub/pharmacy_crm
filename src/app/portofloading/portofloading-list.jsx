import ApiErrorPage from "@/components/api-error/api-error";
import DataTable from "@/components/common/data-table";
import LoadingBar from "@/components/loader/loading-bar";
import { GRCODE_API } from "@/constants/apiConstants";
import useDebounce from "@/hooks/useDebounce";
import { useGetApiMutation } from "@/hooks/useGetApiMutation";
import { useMemo, useState } from "react";
import GrCodeForm from "./grcode-form";

const PortofList = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const params = useMemo(
    () => ({
      page: pageIndex + 1,
      per_page: pageSize,
      ...(debouncedSearch?.trim() && { search: debouncedSearch.trim() }),
    }),
    [pageIndex, pageSize, debouncedSearch]
  );
  const { data, isLoading, isError, refetch } = useGetApiMutation({
    url: GRCODE_API.getlist,
    queryKey: ["portofloading-list", pageIndex],
    params,
  });

  const apiData = data?.data;

  const columns = [
    {
      header: "Port of Loading",
      accessorKey: "portofLoading",
    },
    {
      header: "Loading Country",
      accessorKey: "portofLoadingCountry",
    },
    {
      header: "Status",
      cell: ({ row }) => (
        <ToggleStatus
          initialStatus={row.original.portofLoading_status}
          apiUrl={GRCODE_API.updateStatus(row.original.id)}
          payloadKey="portofLoading_status"
          onSuccess={refetch}
        />
      ),
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <GrCodeForm editId={row.original.id} onSuccess={refetch} />
      ),
    },
  ];

  if (isError) return <ApiErrorPage onRetry={refetch} />;

  return (
    <>
      {isLoading && <LoadingBar />}
      <DataTable
        data={data?.data?.data || []}
        columns={columns}
        pageSize={pageSize}
        searchPlaceholder="Search port of loading..."
        toolbarRight={<GrCodeForm onSuccess={refetch} />}
        serverPagination={{
          pageIndex,
          pageCount: apiData?.last_page ?? 1,
          total: apiData?.total ?? 0,
          onPageChange: setPageIndex,
          onPageSizeChange: setPageSize,
          onSearch: setSearch,
        }}
      />
    </>
  );
};

export default PortofList;
