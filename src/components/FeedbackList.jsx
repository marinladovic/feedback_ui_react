import PropType from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      text: PropType.string.isRequired,
      rating: PropType.number.isRequired,
    })
  ),
};

export default FeedbackList;
