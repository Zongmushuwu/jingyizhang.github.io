import SubmissionPage from "../../components/SubmissionPage";
import { submissions } from "../../data/submissions";

export default function VR2027() {
    return <SubmissionPage publication={submissions[1]} />;
}
