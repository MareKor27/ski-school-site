import { useEffect, useState } from "react";
import { AuditLog } from "../../api/type/auditLog.dto";
import { readAudits } from "../../api/AdminAditApi";

export const useAudit = () => {
  const [audits, setAudits] = useState<AuditLog[]>([]);

  const fetchAudits = async () => {
    const response = await readAudits();

    setAudits(response.content);
  };

  useEffect(() => {
    fetchAudits();
  }, []);

  return { audits };
};
