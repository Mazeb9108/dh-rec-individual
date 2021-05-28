import PropTypes from "prop-types";

export default function MovieList(porps) {
  return (
    <div>
      <div>
        <p>{porps.title}</p>

      </div>
    </div>
  );
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
};
