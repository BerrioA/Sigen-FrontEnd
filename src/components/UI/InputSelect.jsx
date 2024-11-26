import PropTypes from "prop-types";

export const InputSelect = ({ Icon, colorIcons, optionOne }) => {
  return (
    <div className="relative ">
      {Icon && (
        <Icon className={`absolute left-2 top-2 text-[10px] ${colorIcons}`} />
      )}
      <select
        type="text"
        className={`py-2 pl-8 pr-4 outline-none  w-full bg-slate-50`}
      >
        <option>{optionOne}</option>
        <option>Opción 2</option>
        <option>Opción 3</option>
        <option>Opción 4</option>
        <option>Opción 5</option>
      </select>
    </div>
  );
};

InputSelect.propTypes = {
  Icon: PropTypes.object.isRequired,
  colorIcons: PropTypes.string,
  optionOne: PropTypes.string.isRequired,
};