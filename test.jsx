
branch_short ->required
contract_date ->required
contract_no ->required
contract_ref ->required
contract_pono ->required
contract_buyer_id ->
contract_buyer ->required
contract_buyer_add ->required
contract_consignee_id
contract_consignee ->required
contract_consignee_add ->required
contract_container_size ->required
contract_product ->required
contract_product_cust_des 
contract_gr_code
contract_lut_code
contract_vessel_flight_no
contract_loading ->required
contract_prereceipts 
contract_precarriage
contract_destination_port ->required
contract_discharge ->required 
contract_cif ->required
contract_destination_country ->required
contract_freight_charges
contract_dollar_rate
contract_shipment
contract_ship_date
contract_specification1
contract_specification2
contract_payment_terms
contract_remarks
subs[contractSub_item_id ->required,contractSub_qnty ->required,contractSub_mrp,contractSub_item_gst]


fir ranch_short this DropdownMenu 
 const { branch,  } = useMasterQueries([
    "branch",

  ]);

  contract_buyer -- dropdown 
  const { buyer } = useMasterQueries([
    "buyer",

  ]);

  contract_loading
  const { countryPort } = useMasterQueries([
    "countryPort",

  ]);
  destination_port
  const { port } = useMasterQueries([
    "port",

  ]);
  contract_discharge
  const { port } = useMasterQueries([
    "port",

  ]);
---dropdown 

contract_container_size
const { container_size } = useMasterQueries([
    "container_size",

  ]);
  contract_payment_terms
const { paymentterm } = useMasterQueries([
    "paymentterm",
  ]);
  contract_destination_country
const { country } = useMasterQueries([
    "country",
  ]);


  contractSub_item_id
const { item } = useMasterQueries([
    "item",
  ]);

  contract_product
const { product } = useMasterQueries([
    "product",
  ]);



this are the things dropdown and then above things


below and all textaareaf
contract_buyer_add
contract_consignee_add
contract_specification1
contract_specification2
contract_remarks

rest all input 


const handleSelectChange = useCallback(
    (field, value) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));

      if (field === "contract_buyer") {
        const selectedBuyer = buyerData?.buyer?.find(
          (buyer) => buyer.buyer_name === value
        );
        if (selectedBuyer) {
          setFormData((prev) => ({
            ...prev,
            contract_buyer_add: selectedBuyer.buyer_address,
            contract_consignee: selectedBuyer.buyer_name,
            contract_consignee_add: selectedBuyer.buyer_address,
            contract_destination_port: selectedBuyer.buyer_port,
            contract_discharge: selectedBuyer.buyer_port,
            contract_cif: selectedBuyer.buyer_port,
            contract_destination_country: selectedBuyer.buyer_country,
          }));
        }

        const selectedCompanySort = branchData?.branch?.find(
          (branch) => branch.branch_short === formData.branch_short
        );
        if (selectedCompanySort) {
          const contractRef = `${selectedCompanySort.branch_name_short}/${selectedBuyer.buyer_sort}/${formData.contract_no}`;
          setFormData((prev) => ({
            ...prev,
            contract_ref: contractRef,
            contract_pono: contractRef,
          }));
        }
      }

      if (field === "contract_destination_port") {
        const selectedCountry = portsData?.country?.find(
          (country) => country.country_port === value
        );
        setFormData((prev) => ({
          ...prev,
          contract_discharge: value,
          contract_cif: value,
          contract_destination_country: selectedCountry?.country_name || value,
        }));
      }

      if (field === "branch_short") {
        const selectedCompanySort = branchData?.branch?.find(
          (branch) => branch.branch_short === value
        );
        if (selectedCompanySort) {
          setFormData((prev) => ({
            ...prev,
            branch_name: selectedCompanySort.branch_name,
            branch_address: selectedCompanySort.branch_address,
            contract_loading: selectedCompanySort.branch_port_of_loading,
          }));

          // for shipment
          const banksForSelectedCompany =
            bankData?.bank?.filter((bank) => bank.branch_short === value) || [];
          setFilteredBanks(banksForSelectedCompany);

          const selectedBuyer = buyerData?.buyer?.find(
            (buyer) => buyer.buyer_name === formData.contract_buyer
          );
          if (selectedBuyer) {
            const contractRef = `${selectedCompanySort.branch_name_short}/${selectedBuyer.buyer_sort}/${formData.contract_no}`;
            setFormData((prev) => ({
              ...prev,
              contract_ref: contractRef,
              contract_pono: contractRef,
            }));
          }
        }
      }
      if (field === "branch_short") {
        setFormData((prev) => ({
          ...prev,
          branch_short: value,
          contract_no: "",
        }));
      }
      if (field === "contract_consignee") {
        const selectedConsignee = buyerData?.buyer?.find(
          (buyer) => buyer.buyer_name === value
        );
        if (selectedConsignee) {
          setFormData((prev) => ({
            ...prev,
            contract_consignee_add: selectedConsignee.buyer_address,
          }));
        }
      }

      if (field === "contract_no") {
        const selectedBuyer = buyerData?.buyer?.find(
          (buyer) => buyer.buyer_name === formData.contract_buyer
        );
        const selectedCompanySort = branchData?.branch?.find(
          (branch) => branch.branch_short === formData.branch_short
        );
        if (selectedBuyer && selectedCompanySort) {
          const contractRef = `${selectedCompanySort.branch_name_short}/${selectedBuyer.buyer_sort}/${value}`;
          setFormData((prev) => ({
            ...prev,
            contract_ref: contractRef,
            contract_pono: contractRef,
          }));
        }
      }
    },
    [
      buyerData,
      branchData,
      formData.branch_short,
      formData.contract_buyer,
      formData.contract_no,
    ]
  );


  
  in this it is my older code so make this  above 
  export const CONTRACT_API = {
    getlist: "/contract",
    create: "/contract",
    getContractNo: "/getContractNo",
    getById: (id) => `/contract/${id}`,
    updateById: (id) => `/contract/${id}`,
    updateStatus: (id) => `/contracts/${id}/status`,
    deleteSubs: (id) => `/deletecontractSub/${id}`,
  };
  contract_no 
  for use use apinuttaun in geta nd pass branch_short when chnage then  you will get ref
  getContractNo: "/getContractNo",
this is the api for that
  import ApiErrorPage from "@/components/api-error/api-error";
  import PageHeader from "@/components/common/page-header";
  import LoadingBar from "@/components/loader/loading-bar";
  import { Button } from "@/components/ui/button";
  import { Card } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { useApiMutation } from "@/hooks/useApiMutation";
  import useMasterQueries from "@/hooks/useMasterQueries";
  import { useQueryClient } from "@tanstack/react-query";
  import { Loader2, User } from "lucide-react";
  import { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import { toast } from "sonner";
  import { VENDOR_API } from "@/constants/apiConstants";
import { set } from "react-hook-form"
  
  const INITIAL_STATE = {
    vendor_alias: "",
    vendor_short: "",
    vendor_name: "",
    vendor_address: "",
    vendor_city: "",
    vendor_state: "",
    vendor_pincode: "",
    vendor_contact_person: "",
    vendor_mobile1: "",
    vendor_mobile2: "",
    vendor_landline: "",
    vendor_fax: "",
    vendor_remarks: "",
    vendor_bank: "",
    vendor_branch: "",
    vendor_account_name: "",
    vendor_account_no: "",
    vendor_ifscode: "",
    vendor_tin_no: "",
    vendor_gst_no: "",
    vendor_status: "Active",
  };
  
  const numberFields = [
    "vendor_pincode",
    "vendor_mobile1",
    "vendor_mobile2",
    "vendor_landline",
    "vendor_account_no",
  ];
  
  const VendorForm = () => {
    const { id } = useParams();
    const isEdit = Boolean(id);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
  
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState({});
    const { trigger, loading } = useApiMutation();
    const {
      trigger: fetchVendor,
      loading: loadingData,
      error,
    } = useApiMutation();
  
    const { state } = useMasterQueries(["state"]);
    const {
      data: stateData,
      loading: loadingState,
      error: stateError,
      refetch: refetchState,
    } = state;
  
    useEffect(() => {
      if (!isEdit) return;
  
      const fetchData = async () => {
        try {
          const res = await fetchVendor({ url: VENDOR_API.getById(id) });
          setFormData({ ...INITIAL_STATE, ...res.data });
        } catch {
          toast.error("Failed to load Vendor data");
        }
      };
      fetchData();
    }, [id]);
  
    const handleChange = (name, value) => {
      let valStr = value !== null && value !== undefined ? String(value) : "";
  
      if (name === "vendor_mobile1" || name === "vendor_mobile2") {
        if (!/^\d*$/.test(valStr) || valStr.length > 10) return;
      }
  
      if (numberFields.includes(name) && !/^\d*$/.test(valStr)) return;
  
      setFormData((p) => ({ ...p, [name]: valStr }));
      setErrors((p) => ({ ...p, [name]: "" }));
    };
  
    const validate = () => {
      const newErrors = {};
  
      if (!formData.vendor_short.trim())
        newErrors.vendor_short = "Vendor short name is required";
      if (!formData.vendor_name.trim())
        newErrors.vendor_name = "Vendor name is required";
      if (!formData.vendor_state.trim())
        newErrors.vendor_state = "Vendor state is required";
  
      if (formData.vendor_mobile1 && formData.vendor_mobile1.length !== 10)
        newErrors.vendor_mobile1 = "Mobile 1 must be 10 digits";
      if (formData.vendor_mobile2 && formData.vendor_mobile2.length !== 10)
        newErrors.vendor_mobile2 = "Mobile 2 must be 10 digits";
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleStateChange = (value) => {
      setFormData((p) => ({ ...p, vendor_state: value }));
      setErrors((p) => ({ ...p, vendor_state: "" }));
    };
  
    const handleSubmit = async () => {
      if (!validate()) return;
  
      try {
        const res = await trigger({
          url: isEdit ? VENDOR_API.updateById(id) : VENDOR_API.create,
          method: isEdit ? "PUT" : "POST",
          data: formData,
        });
  
        if (res.code === 201) {
          toast.success(
            res.message ??
              (isEdit ? "Updated successfully" : "Created successfully")
          );
          navigate("/master/vendor");
          await queryClient.invalidateQueries(["vendor-list"]);
        } else {
          toast.error(res.message || "Something went wrong");
        }
      } catch (err) {
        toast.error(err.message || "Something went wrong");
      }
    };
  
    if (error || stateError) {
      return (
        <ApiErrorPage
          onRetry={() => {
            if (stateError) refetchState();
          }}
        />
      );
    }
  
    const isLoading = loading || loadingData || loadingState;
  
    return (
      <>
        {isLoading && <LoadingBar />}
  
        <PageHeader
          icon={User}
          title={isEdit ? "Edit Vendor" : "Create Vendor"}
          rightContent={
            <div className="flex gap-2">
              <Button onClick={handleSubmit} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : isEdit ? (
                  "Update"
                ) : (
                  "Create"
                )}
              </Button>
              <Button variant="outline" onClick={() => navigate(-1)}>
                Back
              </Button>
            </div>
          }
        />
  
        <Card className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Basic Info */}
            <Field
              label="Vendor Alias"
              name="vendor_alias"
              value={formData.vendor_alias}
              onChange={handleChange}
            />
            <Field
              label="Short Name"
              name="vendor_short"
              value={formData.vendor_short}
              onChange={handleChange}
              error={errors.vendor_short}
              required
            />
            <Field
              label="Vendor Name"
              name="vendor_name"
              value={formData.vendor_name}
              onChange={handleChange}
              error={errors.vendor_name}
              required
            />
            <Field
              label="Address"
              name="vendor_address"
              value={formData.vendor_address}
              onChange={handleChange}
            />
            <Field
              label="City"
              name="vendor_city"
              value={formData.vendor_city}
              onChange={handleChange}
            />
  
            {/* State */}
            <div>
              <Label>State *</Label>
              <Select
                value={formData.vendor_state}
                onValueChange={handleStateChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {stateData?.data?.map((s) => (
                    <SelectItem key={s.state_name} value={s.state_name}>
                      {s.state_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.vendor_state && (
                <p className="text-xs text-red-500">{errors.vendor_state}</p>
              )}
            </div>
  
            {/* Contacts */}
            <Field
              label="Pincode"
              name="vendor_pincode"
              value={formData.vendor_pincode}
              onChange={handleChange}
            />
            <Field
              label="Contact Person"
              name="vendor_contact_person"
              value={formData.vendor_contact_person}
              onChange={handleChange}
            />
            <Field
              label="Mobile 1"
              name="vendor_mobile1"
              value={formData.vendor_mobile1}
              onChange={handleChange}
              error={errors.vendor_mobile1}
            />
            <Field
              label="Mobile 2"
              name="vendor_mobile2"
              value={formData.vendor_mobile2}
              onChange={handleChange}
              error={errors.vendor_mobile2}
            />
            <Field
              label="Landline"
              name="vendor_landline"
              value={formData.vendor_landline}
              onChange={handleChange}
            />
            <Field
              label="Fax"
              name="vendor_fax"
              value={formData.vendor_fax}
              onChange={handleChange}
            />
            <Field
              label="Remarks"
              name="vendor_remarks"
              value={formData.vendor_remarks}
              onChange={handleChange}
            />
  
            {/* Bank Info */}
            <Field
              label="Bank"
              name="vendor_bank"
              value={formData.vendor_bank}
              onChange={handleChange}
            />
            <Field
              label="Branch"
              name="vendor_branch"
              value={formData.vendor_branch}
              onChange={handleChange}
            />
            <Field
              label="Account Name"
              name="vendor_account_name"
              value={formData.vendor_account_name}
              onChange={handleChange}
            />
            <Field
              label="Account No"
              name="vendor_account_no"
              value={formData.vendor_account_no}
              onChange={handleChange}
            />
            <Field
              label="IFSC"
              name="vendor_ifscode"
              value={formData.vendor_ifscode}
              onChange={handleChange}
            />
            <Field
              label="TIN No"
              name="vendor_tin_no"
              value={formData.vendor_tin_no}
              onChange={handleChange}
            />
            <Field
              label="GST No"
              name="vendor_gst_no"
              value={formData.vendor_gst_no}
              onChange={handleChange}
            />
  
            {/* Status */}
            {isEdit && (
              <div>
                <Label>Status</Label>
                <Select
                  value={formData.vendor_status}
                  onValueChange={(v) => handleChange("vendor_status", v)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                        Active
                      </div>
                    </SelectItem>
                    <SelectItem value="Inactive">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mr-2" />
                        Inactive
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </Card>
      </>
    );
  };
  
  // Reusable Field Component
  const Field = ({ label, name, value, onChange, error, required }) => (
    <div>
      <Label>
        {label} {required && <span>*</span>}
      </Label>
      <Input value={value} onChange={(e) => onChange(name, e.target.value)} />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
  
  export default VendorForm;
use this style only   which and field is there implement that crtly and in handle chngae how it is chnage and setting value in old like that need to set