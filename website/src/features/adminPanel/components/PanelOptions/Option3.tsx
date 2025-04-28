import { useEffect, useState } from "react";

export function Option3() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const newDate = new Date();
    newDate.setHours(0, 0, 0, 0);
    setDate(newDate);
  }, []);
  return (
    <div>
      W budowie Option3
      <div>
        {date.toISOString()}
        {date.toLocaleString()}
      </div>
    </div>
  );
}
