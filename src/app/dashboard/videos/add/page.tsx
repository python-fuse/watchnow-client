import NewVideoForm from "@/components/videos/NewVideoForm";
const page = () => {
  return (
    <div className="w-3/4 md:w-2/5 mx-auto  space-y-8  p-4">
      <h2 className="text-2xl  font-bold">New Video</h2>

      <NewVideoForm />
    </div>
  );
};
export default page;
