/* eslint-disable react/prop-types */
export default function PowerSelect({ power, setPower }) {
  const powerSelect = [
    {
      id: 1,
      value: "2000",
      show: "2000 W",
    },
    {
      id: 2,
      value: "2500",
      show: "2500 W",
    },
    {
      id: 3,
      value: "3000",
      show: "3000 W",
    },
    {
      id: 4,
      value: "3500",
      show: "3500 W",
    },
    {
      id: 5,
      value: "4000",
      show: "4000 W",
    },
    {
      id: 6,
      value: "4500",
      show: "4500 W",
    },
    {
      id: 7,
      value: "5000",
      show: "5000 W",
    },
    {
      id: 8,
      value: "5500",
      show: "5500 W",
    },
    {
      id: 9,
      value: "6000",
      show: "6000 W",
    },
    {
      id: 10,
      value: "6500",
      show: "6500 W",
    },
    {
      id: 11,
      value: "7000",
      show: "7000 W",
    },
    {
      id: 12,
      value: "7500",
      show: "7500 W",
    },
    {
      id: 13,
      value: "8000",
      show: "8000 W",
    },
  ];

  return (
    <div className="col-span-full text-base">
      <label
        className="block mb-3 font-medium text-gray-600"
        htmlFor="volts"
      >
        Selecione a potência do seu chuveiro:
      </label>

      <select
        id="volts"
        value={power}
        onChange={(event) => setPower(event.target.value)}
        className="block px-3 p-1 border text-center text-night rounded-md"
      >
        {powerSelect.map((data) => (
          <option value={data.value} key={data.id} className="text-start">{data.show}</option>
        ))}
      </select>
    </div>
  );
}
