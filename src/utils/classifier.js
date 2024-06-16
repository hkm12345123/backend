var vntk = require('vntk');
var classifier = new vntk.BayesClassifier();
const commandHandle = require('../helpers/command.handle')
//emotion 
classifier.addDocument('trời tối quá', '100');
classifier.addDocument('trời tối rồi', '100');
classifier.addDocument('tối rồi', '100');
classifier.addDocument('không nhìn thấy gì cả', '100');
classifier.addDocument('tối tăm quá', '100');
classifier.addDocument('buổi tối quá', '100');
classifier.addDocument('trời tối sầm', '100');
classifier.addDocument('đêm đã đến', '100');
classifier.addDocument('không nhìn thấy gì trong bóng tối', '100');
classifier.addDocument('đen tối quá', '100');
classifier.addDocument('cảnh tối đen', '100');
classifier.addDocument('tối rồi, mất điện rồi', '100');
classifier.addDocument('không có ánh sáng nào', '100');
classifier.addDocument('bóng tối kín', '100');
classifier.addDocument('đã trở thành tối', '100');
classifier.addDocument('trời đã tối như đêm', '100');
classifier.addDocument('màn đêm đã xuất hiện', '100');
classifier.addDocument('tối tăm đen', '100');
classifier.addDocument('thiếu ánh sáng', '100');
classifier.addDocument('màn đêm bao phủ', '100');
classifier.addDocument('cảnh đêm đen', '100');
classifier.addDocument('đêm tối không thấy gì', '100');
classifier.addDocument('tối rất sâu', '100');
classifier.addDocument('đã thành đêm', '100');
classifier.addDocument('màn đêm u tối', '100');
classifier.addDocument('trời đen sì', '100');
classifier.addDocument('đã đêm tối rồi', '100');
classifier.addDocument('cảnh tối sầm', '100');
classifier.addDocument('đêm buông xuống', '100');
classifier.addDocument('cảnh đêm tăm tối', '100');
classifier.addDocument('trời tối đen như mực', '100');
classifier.addDocument('cảnh tối om', '100');
classifier.addDocument('đã thành đêm sâu', '100');
classifier.addDocument('tối đen như mực', '100');
classifier.addDocument('trời đã tối mịt mùng', '100');

classifier.addDocument('bảo vệ', '002');
classifier.addDocument('chống trộm', '002');
classifier.addDocument('đóng cửa lại', '002');
classifier.addDocument('cần khóa cửa', '002');
classifier.addDocument('đóng cửa', '002');
classifier.addDocument('cửa khóa rồi đấy', '002');
classifier.addDocument('khóa cửa lại', '002');
classifier.addDocument('đóng chặt cửa', '002');
classifier.addDocument('cần khóa cẩn thận', '002');
classifier.addDocument('khóa cửa đi', '002');
classifier.addDocument('đã khóa cửa', '002');
classifier.addDocument('khóa cửa rồi', '002');
classifier.addDocument('đóng cửa kỹ', '002');
classifier.addDocument('cần khóa cửa chặt', '002');
classifier.addDocument('khóa cửa đi nào', '002');
classifier.addDocument('đã khóa cẩn thận', '002');
classifier.addDocument('khóa cửa đi nhanh', '002');
classifier.addDocument('đóng cửa chặt chẽ', '002');
classifier.addDocument('cần khóa cẩn thận lại', '002');
classifier.addDocument('khóa cửa kỹ lưỡng', '002');
classifier.addDocument('đã khóa cẩn thận rồi đấy', '002');
classifier.addDocument('khóa cửa nhanh', '002');
classifier.addDocument('đóng cửa chắc chắn', '002');
classifier.addDocument('đóng cửa vào nhé', '002');
classifier.addDocument('đóng cửa vào', '002');
classifier.addDocument('cần khóa cẩn thận kỹ', '002');
classifier.addDocument('khóa cửa đi nhanh chóng', '002');
classifier.addDocument('đã khóa chặt cửa', '002');
classifier.addDocument('khóa cửa đi nhanh nào', '002');
classifier.addDocument('đóng cửa chắc nịch', '002');
classifier.addDocument('cần khóa cẩn thận lại nào', '002');
classifier.addDocument('khóa cửa kỹ càng', '002');
classifier.addDocument('đã khóa cẩn thận kỹ lưỡng', '002');
classifier.addDocument('khóa cửa đi nhanh chóng đi', '002');


classifier.addDocument('cửa đã bị khóa rồi', '102');
classifier.addDocument('muốn vào phòng', '102');
classifier.addDocument('cần ra ngoài', '102');
classifier.addDocument('tôi muốn ra ngoài', '102');
classifier.addDocument('tôi muốn ra ngoài', '102');
classifier.addDocument('tôi muốn ra ngoài', '102');
classifier.addDocument('tôi muốn ra ngoài', '102');
classifier.addDocument('ra ngoài', '102');
classifier.addDocument('ra ngoài', '102');
classifier.addDocument('cửa đã được khóa rồi', '102');
classifier.addDocument('cần vào bên trong', '102');
classifier.addDocument('hãy mở cửa ra', '102');
classifier.addDocument('cửa đã khóa chặt rồi', '102');
classifier.addDocument('muốn vào trong phòng', '102');
classifier.addDocument('mở cửa ra nào', '102');
classifier.addDocument('cửa đã khóa cẩn thận rồi', '102');
classifier.addDocument('cần vào trong', '102');
classifier.addDocument('hãy mở ra cửa', '102');
classifier.addDocument('cửa đã khóa kỹ rồi', '102');
classifier.addDocument('muốn vào căn phòng', '102');
classifier.addDocument('mở cửa đi nào', '102');
classifier.addDocument('cửa đã khóa chặt cẩn thận rồi', '102');
classifier.addDocument('cần vào bên trong phòng', '102');
classifier.addDocument('hãy mở cửa đi nào', '102');
classifier.addDocument('cửa đã được khóa chặt kỹ rồi', '102');
classifier.addDocument('muốn vào phía trong', '102');
classifier.addDocument('mở cửa ra nào bạn', '102');
classifier.addDocument('cửa đã bị khóa kỹ cẩn thận rồi', '102');
classifier.addDocument('cần vào bên trong căn phòng', '102');
classifier.addDocument('hãy mở ra cửa đi', '102');
classifier.addDocument('cửa đã được khóa cẩn thận chặt rồi', '102');
classifier.addDocument('muốn vào phía trong phòng', '102');
classifier.addDocument('mở cửa ra nào bạn ơi', '102');
classifier.addDocument('cửa đã khóa chặt cẩn thận kỹ rồi', '102');
classifier.addDocument('cần vào bên trong chỗ phòng', '102');
classifier.addDocument('hãy mở ra cửa đi nào', '102');


classifier.addDocument('trời nóng quá', '101');
classifier.addDocument('trời nóng ghê', '101');
classifier.addDocument('nóng buốt ', '101');
classifier.addDocument('nóng quá', '101');
classifier.addDocument('cần bật quạt vì trời nóng quá', '101');
classifier.addDocument('muốn bật quạt để giải tỏa cái nóng', '101');
classifier.addDocument('ý định bật quạt vì trời nóng ghê', '101');
classifier.addDocument('muốn mở quạt lên vì nóng buốt', '101');
classifier.addDocument('đang muốn bật quạt vì trời nóng quá', '101');
classifier.addDocument('mong muốn bật quạt để giảm nhiệt độ', '101');
classifier.addDocument('đang cần mở quạt lên vì nóng ghê', '101');
classifier.addDocument('định bật quạt vì trời nóng buốt', '101');
classifier.addDocument('muốn bật quạt vì thấy nóng quá', '101');
classifier.addDocument('đang cần mở quạt vì thời tiết nóng ghê', '101');
classifier.addDocument('cảm thấy nóng buốt, nên bật quạt', '101');
classifier.addDocument('muốn mở quạt lên vì trời nóng quá', '101');
classifier.addDocument('ý định bật quạt để giảm bớt cái nóng', '101');
classifier.addDocument('mong muốn bật quạt vì cảm giác nóng ghê', '101');
classifier.addDocument('đang muốn bật quạt vì trời nóng buốt', '101');
classifier.addDocument('cảm thấy nóng quá, muốn bật quạt', '101');
classifier.addDocument('đang cần mở quạt lên vì cảm giác nóng ghê', '101');
classifier.addDocument('ý định bật quạt để giảm bớt cảm giác nóng buốt', '101');
classifier.addDocument('muốn bật quạt vì trời nóng quá', '101');
classifier.addDocument('đang muốn mở quạt lên để giảm nhiệt độ', '101');
classifier.addDocument('mong muốn bật quạt vì trời nóng ghê', '101');
classifier.addDocument('đang cần bật quạt vì nóng buốt', '101');
classifier.addDocument('cảm thấy nóng quá, cần mở quạt', '101');
classifier.addDocument('muốn bật quạt vì cảm giác nóng quá', '101');
classifier.addDocument('ý định bật quạt để giải tỏa cái nóng', '101');
classifier.addDocument('mong muốn mở quạt lên vì cảm giác nóng ghê', '101');
classifier.addDocument('đang cần bật quạt vì trời nóng buốt', '101');
classifier.addDocument('cảm thấy nóng quá, muốn bật quạt lên', '101');
classifier.addDocument('muốn mở quạt vì cảm giác nóng quá', '101');
classifier.addDocument('ý định bật quạt để giảm bớt cảm giác nóng ghê', '101');
classifier.addDocument('mong muốn mở quạt lên vì trời nóng buốt', '101');
classifier.addDocument('đang cần bật quạt vì cảm giác nóng quá', '101');
classifier.addDocument('cảm thấy nóng quá, cần mở quạt để giảm nhiệt độ', '101');
classifier.addDocument('muốn bật quạt vì thấy nóng ghê', '101');
classifier.addDocument('ý định mở quạt lên vì trời nóng buốt', '101');
classifier.addDocument('mong muốn bật quạt để giảm bớt cảm giác nóng quá', '101');
classifier.addDocument('đang cần bật quạt vì cảm giác nóng ghê', '101');
classifier.addDocument('cảm thấy nóng quá, muốn bật quạt vì trời nóng buốt', '101');
classifier.addDocument('muốn mở quạt lên để giảm bớt cảm giác nóng quá', '101');
classifier.addDocument('ý định bật quạt để giảm nhiệt độ', '101');
classifier.addDocument('mong muốn mở quạt lên vì cảm giác nóng ghê', '101');
classifier.addDocument('đang cần bật quạt để giảm bớt cảm giác nóng buốt', '101');
classifier.addDocument('cảm thấy nóng quá, muốn bật quạt vì cảm giác nóng quá', '101');


classifier.addDocument('trời lạnh ghê', '001');
classifier.addDocument('lạnh buốt ', '001');
classifier.addDocument('lạnh quá', '001')
classifier.addDocument('trời nóng quá', '101');
classifier.addDocument('cần tắt quạt vì trời lạnh ghê', '001');
classifier.addDocument('muốn tắt quạt để giữ ấm', '001');
classifier.addDocument('ý định tắt quạt vì trời lạnh buốt', '001');
classifier.addDocument('muốn tắt quạt vì thấy lạnh quá', '001');
classifier.addDocument('đang muốn tắt quạt vì trời lạnh ghê', '001');
classifier.addDocument('mong muốn tắt quạt để giữ ấm', '001');
classifier.addDocument('đang cần tắt quạt vì thấy lạnh buốt', '001');
classifier.addDocument('định tắt quạt vì trời lạnh quá', '001');
classifier.addDocument('muốn tắt quạt vì cảm giác trời lạnh ghê', '001');
classifier.addDocument('đang cần tắt quạt vì thời tiết lạnh buốt', '001');
classifier.addDocument('cảm thấy lạnh quá, nên tắt quạt', '001');
classifier.addDocument('muốn tắt quạt vì trời lạnh ghê', '001');
classifier.addDocument('ý định tắt quạt để giữ ấm', '001');
classifier.addDocument('mong muốn tắt quạt vì cảm giác lạnh buốt', '001');
classifier.addDocument('đang muốn tắt quạt vì trời lạnh quá', '001');
classifier.addDocument('cảm thấy lạnh quá, muốn tắt quạt', '001');
classifier.addDocument('đang cần tắt quạt vì cảm giác thời tiết lạnh buốt', '001');
classifier.addDocument('ý định tắt quạt để giữ ấm', '001');
classifier.addDocument('muốn tắt quạt vì trời nóng quá', '001');
classifier.addDocument('cần tắt quạt để giảm nhiệt độ', '001');
classifier.addDocument('ý định tắt quạt vì thấy nóng quá', '001');
classifier.addDocument('muốn tắt quạt để giảm bớt cái nóng', '001');
classifier.addDocument('đang muốn tắt quạt vì trời nóng ghê', '001');
classifier.addDocument('mong muốn tắt quạt để giải tỏa cái nóng', '001');
classifier.addDocument('đang cần tắt quạt vì cảm giác nóng buốt', '001');
classifier.addDocument('định tắt quạt vì trời nóng quá', '001');
classifier.addDocument('muốn tắt quạt vì cảm giác nóng quá', '001');
classifier.addDocument('đang cần tắt quạt vì cảm giác nóng ghê', '001');
classifier.addDocument('cảm thấy nóng quá, muốn tắt quạt', '001');
classifier.addDocument('muốn tắt quạt vì cảm giác thời tiết nóng buốt', '001');
classifier.addDocument('ý định tắt quạt để giảm bớt cảm giác nóng quá', '001');
classifier.addDocument('mong muốn tắt quạt để giải tỏa cái nóng', '001');
classifier.addDocument('đang cần tắt quạt vì cảm giác nóng quá', '001');
classifier.addDocument('cảm thấy nóng quá, cần tắt quạt để giảm nhiệt độ', '001');


classifier.addDocument('đi ngủ thôi', '000');
classifier.addDocument('sáng rồi', '000');
classifier.addDocument('đến giờ ngủ', '000');
classifier.addDocument('muốn tắt đèn để đi ngủ', '000');
classifier.addDocument('đang cần tắt đèn vì muốn đi ngủ', '000');
classifier.addDocument('ý định tắt đèn để chuẩn bị ngủ', '000');
classifier.addDocument('muốn tắt đèn vì đã tới giờ ngủ', '000');
classifier.addDocument('đang muốn tắt đèn để sáng sớm', '000');
classifier.addDocument('cần tắt đèn để đi ngủ', '000');
classifier.addDocument('muốn tắt đèn vì đã sáng rồi', '000');
classifier.addDocument('đang muốn tắt đèn để chuẩn bị ngủ', '000');
classifier.addDocument('cần tắt đèn để đi ngủ sớm', '000');
classifier.addDocument('muốn tắt đèn vì đã đến giờ ngủ', '000');
classifier.addDocument('đang cần tắt đèn để sáng mai', '000');
classifier.addDocument('cần tắt đèn vì muốn đi ngủ sớm', '000');
classifier.addDocument('đang muốn tắt đèn để sáng mai', '000');
classifier.addDocument('muốn tắt đèn vì đã tới giờ đi ngủ', '000');
classifier.addDocument('cần tắt đèn để chuẩn bị đi ngủ', '000');
classifier.addDocument('muốn tắt đèn vì đã sáng rồi', '000');
classifier.addDocument('cần tắt đèn để chuẩn bị đi ngủ', '000');
classifier.addDocument('muốn tắt đèn vì đã tới giờ ngủ', '000');
classifier.addDocument('cần tắt đèn để chuẩn bị đi ngủ', '000');
classifier.addDocument('muốn tắt đèn vì đã đến giờ đi ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã tới giờ đi ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã sáng rồi', '000');
classifier.addDocument('muốn tắt đèn để chuẩn bị đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã đến giờ đi ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã tới giờ ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã sáng rồi', '000');
classifier.addDocument('muốn tắt đèn để chuẩn bị đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã đến giờ ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã tới giờ ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã sáng rồi', '000');
classifier.addDocument('muốn tắt đèn để chuẩn bị đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã đến giờ ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã tới giờ ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã sáng rồi', '000');
classifier.addDocument('muốn tắt đèn để chuẩn bị đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã đến giờ ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã tới giờ ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã sáng rồi', '000');
classifier.addDocument('muốn tắt đèn để chuẩn bị đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã đến giờ ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã tới giờ ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã sáng rồi', '000');
classifier.addDocument('muốn tắt đèn để chuẩn bị đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã đến giờ ngủ', '000');
classifier.addDocument('muốn tắt đèn để sẵn sàng đi ngủ', '000');
classifier.addDocument('cần tắt đèn vì đã tới giờ ngủ', '000');
classifier.addDocument('chói mắt quá', '000');
classifier.addDocument('chói mắt ghê', '000');
classifier.addDocument('sáng chói', '000');


//command 
classifier.addDocument('bật quạt ở phòng khách', '101')
classifier.addDocument('tôi cần bật quạt tại phòng khách', '101')
classifier.addDocument('tôi muốn bật quạt ở phòng khách', '101')
classifier.addDocument('cần bật quạt tại phòng khách', '101')
classifier.addDocument('nhờ bạn bật giúp quạt phòng khách', '101')
classifier.addDocument('giúp bật quạt chỗ phòng khách', '101')
classifier.addDocument('hãy bật quạt phòng khách', '101')
classifier.addDocument('tôi cần bật quạt tại phòng khách', '101')
classifier.addDocument('mở quạt ở phòng ngủ', '101')
classifier.addDocument('tôi cần mở quạt tại phòng ngủ', '101')
classifier.addDocument('tôi muốn mở quạt ở phòng khách', '101')
classifier.addDocument('cần mở quạt tại phòng khách', '101')
classifier.addDocument('nhờ bạn mở giúp quạt phòng khách', '101')
classifier.addDocument('giúp mở quạt chỗ phòng khách', '101')
classifier.addDocument('hãy mở quạt phòng khách', '101')
classifier.addDocument('tôi cần mở quạt tại phòng khách', '101')
classifier.addDocument('bật quạt tại phòng khách', '101')
classifier.addDocument('bật quạt chỗ phòng khách', '101')
classifier.addDocument('bật máy quạt ở phòng khách', '101')
classifier.addDocument('bật quạt tại chỗ phòng khách', '101')
classifier.addDocument('kích hoạt quạt ở phòng khách', '101')
classifier.addDocument('mở máy quạt phòng khách', '101')
classifier.addDocument('điều chỉnh quạt ở phòng khách', '101')
classifier.addDocument('chạy quạt tại phòng khách', '101')
classifier.addDocument('kích quạt ở phòng khách', '101')
classifier.addDocument('bật quạt chỗ phòng khách', '101')
classifier.addDocument('bật quạt phòng khách', '101')
classifier.addDocument('kích hoạt quạt tại phòng khách', '101')
classifier.addDocument('mở quạt chỗ phòng khách', '101')
classifier.addDocument('điều chỉnh máy quạt ở phòng khách', '101')
classifier.addDocument('chạy quạt tại chỗ phòng khách', '101')
classifier.addDocument('kích máy quạt ở phòng khách', '101')
classifier.addDocument('bật quạt chỗ phòng khách', '101')
classifier.addDocument('bật quạt phòng khách', '101')
classifier.addDocument('kích hoạt quạt tại phòng khách', '101')
classifier.addDocument('mở quạt chỗ phòng khách', '101')
classifier.addDocument('điều chỉnh quạt ở phòng khách', '101')
classifier.addDocument('chạy máy quạt tại phòng khách', '101')
classifier.addDocument('kích quạt ở chỗ phòng khách', '101')
classifier.addDocument('bật máy quạt phòng khách', '101')
classifier.addDocument('kích hoạt quạt ở chỗ phòng khách', '101')
classifier.addDocument('mở quạt tại phòng khách', '101')
classifier.addDocument('điều chỉnh máy quạt chỗ phòng khách', '101')
classifier.addDocument('chạy quạt ở phòng khách', '101')
classifier.addDocument('kích máy quạt tại chỗ phòng khách', '101')
classifier.addDocument('bật quạt phòng khách', '101')

classifier.addDocument('tắt quạt ở phòng khách', '001')
classifier.addDocument('tôi cần tắt quạt tại phòng khách', '001')
classifier.addDocument('tôi muốn tắt quạt ở phòng khách', '001')
classifier.addDocument('cần tắt quạt tại phòng khách', '001')
classifier.addDocument('nhờ bạn tắt giúp quạt phòng khách', '001')
classifier.addDocument('giúp tắt quạt chỗ phòng khách', '001')
classifier.addDocument('hãy tắt quạt phòng khách', '001')
classifier.addDocument('tôi cần tắt quạt tại phòng khách', '001')
classifier.addDocument('muốn tắt quạt ở phòng khách', '001')
classifier.addDocument('đang muốn tắt quạt ở phòng khách', '001')
classifier.addDocument('đang có ý định tắt quạt ở phòng khách', '001')
classifier.addDocument('dự định tắt quạt ở phòng khách', '001')
classifier.addDocument('định tắt quạt ở phòng khách', '001')
classifier.addDocument('đang có ý muốn tắt quạt ở phòng khách', '001')
classifier.addDocument('dự định tắt quạt tại phòng khách', '001')
classifier.addDocument('muốn tắt quạt tại phòng khách', '001')
classifier.addDocument('đang có ý định tắt quạt tại phòng khách', '001')
classifier.addDocument('dự định tắt quạt chỗ phòng khách', '001')
classifier.addDocument('muốn tắt quạt chỗ phòng khách', '001')
classifier.addDocument('đang có ý muốn tắt quạt chỗ phòng khách', '001')
classifier.addDocument('dự định tắt quạt phòng khách', '001')
classifier.addDocument('muốn tắt quạt phòng khách', '001')
classifier.addDocument('đang có ý muốn tắt quạt phòng khách', '001')
classifier.addDocument('dự định tắt quạt tại chỗ phòng khách', '001')
classifier.addDocument('muốn tắt quạt tại chỗ phòng khách', '001')
classifier.addDocument('đang có ý muốn tắt quạt tại chỗ phòng khách', '001')
classifier.addDocument('dự định tắt quạt ở nơi phòng khách', '001')
classifier.addDocument('muốn tắt quạt ở nơi phòng khách', '001')
classifier.addDocument('đang có ý muốn tắt quạt ở nơi phòng khách', '001')
classifier.addDocument('dự định tắt quạt tại phòng khách', '001')
classifier.addDocument('muốn tắt quạt tại phòng khách', '001')
classifier.addDocument('đang có ý muốn tắt quạt tại phòng khách', '001')
classifier.addDocument('dự định tắt quạt ở chỗ phòng khách', '001')
classifier.addDocument('muốn tắt quạt ở chỗ phòng khách', '001')
classifier.addDocument('đang có ý muốn tắt quạt ở chỗ phòng khách', '001')
classifier.addDocument('dự định tắt quạt tại nơi phòng khách', '001')
classifier.addDocument('muốn tắt quạt tại nơi phòng khách', '001')
classifier.addDocument('đang có ý muốn tắt quạt tại nơi phòng khách', '001')

classifier.addDocument('bật đèn ở phòng khách', '100')
classifier.addDocument('tôi cần bật đèn tại phòng khách', '100')
classifier.addDocument('tôi muốn bật đèn ở phòng khách', '100')
classifier.addDocument('cần bật đèn tại phòng khách', '100')
classifier.addDocument('nhờ bạn bật giúp đèn phòng khách', '100')
classifier.addDocument('giúp bật đèn chỗ phòng khách', '100')
classifier.addDocument('hãy bật đèn phòng khách', '100')
classifier.addDocument('tôi cần bật đèn tại phòng khách', '100')
classifier.addDocument('mở đèn ở phòng khách', '100')
classifier.addDocument('tôi cần mở đèn tại phòng khách', '100')
classifier.addDocument('tôi muốn mở đèn ở phòng khách', '100')
classifier.addDocument('cần mở đèn tại phòng khách', '100')
classifier.addDocument('nhờ bạn mở giúp đèn phòng khách', '100')
classifier.addDocument('giúp mở đèn chỗ phòng khách', '100')
classifier.addDocument('hãy mở đèn phòng khách', '100')
classifier.addDocument('tôi cần mở đèn tại phòng khách', '100')
classifier.addDocument('kích hoạt đèn trong căn phòng ngồi chung', '100')
classifier.addDocument('đang cần mở đèn tại phòng khách', '100')
classifier.addDocument('ý định bật đèn ở phòng khách', '100')
classifier.addDocument('mở đèn tại chỗ phòng khách', '100')
classifier.addDocument('kích đèn ở phòng khách', '100')
classifier.addDocument('mở đèn trong căn phòng ngồi chung', '100')
classifier.addDocument('dự định bật đèn ở nơi phòng khách', '100')
classifier.addDocument('muốn bật đèn tại phòng khách', '100')
classifier.addDocument('kích hoạt đèn tại chỗ phòng khách', '100')
classifier.addDocument('đang có ý muốn bật đèn ở phòng khách', '100')
classifier.addDocument('mở đèn tại phòng khách', '100')
classifier.addDocument('dự định bật đèn trong căn phòng ngồi chung', '100')
classifier.addDocument('muốn mở đèn ở nơi phòng khách', '100')
classifier.addDocument('kích đèn tại phòng khách', '100')
classifier.addDocument('đang có ý muốn mở đèn chỗ phòng khách', '100')
classifier.addDocument('mở đèn trong căn phòng ngồi chung', '100')
classifier.addDocument('dự định bật đèn tại nơi phòng khách', '100')
classifier.addDocument('muốn mở đèn ở chỗ phòng khách', '100')
classifier.addDocument('kích hoạt đèn ở phòng khách', '100')
classifier.addDocument('đang có ý muốn mở đèn tại phòng khách', '100')
classifier.addDocument('mở đèn tại chỗ phòng khách', '100')
classifier.addDocument('dự định bật đèn ở nơi phòng khách', '100')
classifier.addDocument('muốn mở đèn trong căn phòng ngồi chung', '100')
classifier.addDocument('kích đèn tại phòng khách', '100')
classifier.addDocument('đang có ý muốn bật đèn tại chỗ phòng khách', '100')
classifier.addDocument('mở đèn trong căn phòng ngồi chung', '100')
classifier.addDocument('dự định bật đèn ở nơi phòng khách', '100')
classifier.addDocument('muốn mở đèn tại phòng khách', '100')
classifier.addDocument('kích hoạt đèn ở chỗ phòng khách', '100')
classifier.addDocument('đang có ý muốn mở đèn tại nơi phòng khách', '100')

classifier.addDocument('tắt đèn ở phòng khách', '000')
classifier.addDocument('tôi cần tắt đèn tại phòng khách', '000')
classifier.addDocument('tôi muốn tắt đèn ở phòng khách', '000')
classifier.addDocument('cần tắt đèn tại phòng khách', '000')
classifier.addDocument('nhờ bạn tắt giúp đèn phòng khách', '000')
classifier.addDocument('giúp tắt đèn chỗ phòng khách', '000')
classifier.addDocument('hãy tắt đèn phòng khách', '000')
classifier.addDocument('tôi cần tắt đèn tại phòng khách', '000')
classifier.addDocument('ngừng chiếu sáng ở căn phòng ngồi chung', '000')
classifier.addDocument('đang cần tắt đèn tại phòng khách', '000')
classifier.addDocument('ý định tắt đèn ở phòng khách', '000')
classifier.addDocument('tắt ánh sáng tại chỗ phòng khách', '000')
classifier.addDocument('ngừng hoạt động đèn ở phòng khách', '000')
classifier.addDocument('dừng chiếu sáng trong căn phòng ngồi chung', '000')
classifier.addDocument('ý định tắt đèn tại nơi phòng khách', '000')
classifier.addDocument('đang muốn tắt đèn tại phòng khách', '000')
classifier.addDocument('tắt ánh sáng tại phòng khách', '000')
classifier.addDocument('ngừng hoạt động đèn tại chỗ phòng khách', '000')
classifier.addDocument('dự định tắt đèn ở nơi phòng khách', '000')
classifier.addDocument('muốn tắt đèn tại phòng khách', '000')
classifier.addDocument('tắt ánh sáng trong căn phòng ngồi chung', '000')
classifier.addDocument('đang có ý muốn tắt đèn chỗ phòng khách', '000')
classifier.addDocument('ngừng chiếu sáng tại phòng khách', '000')
classifier.addDocument('tắt đèn trong căn phòng ngồi chung', '000')
classifier.addDocument('đang muốn tắt ánh sáng tại phòng khách', '000')
classifier.addDocument('ngừng chiếu sáng ở chỗ phòng khách', '000')
classifier.addDocument('dự định tắt đèn tại nơi phòng khách', '000')
classifier.addDocument('muốn tắt đèn trong căn phòng ngồi chung', '000')
classifier.addDocument('đang có ý muốn tắt đèn ở phòng khách', '000')
classifier.addDocument('ngừng hoạt động đèn tại chỗ phòng khách', '000')
classifier.addDocument('dự định tắt ánh sáng ở nơi phòng khách', '000')
classifier.addDocument('muốn tắt đèn tại phòng khách', '000')
classifier.addDocument('ngừng hoạt động đèn trong căn phòng ngồi chung', '000')
classifier.addDocument('dự định tắt ánh sáng tại phòng khách', '000')
classifier.addDocument('muốn tắt đèn trong căn phòng ngồi chung', '000')
classifier.addDocument('đang có ý muốn tắt ánh sáng tại chỗ phòng khách', '000')
classifier.addDocument('ngừng chiếu sáng ở nơi phòng khách', '000')
classifier.addDocument('dự định tắt ánh sáng trong căn phòng ngồi chung', '000')

classifier.addDocument('tắt đèn ở phòng ngủ', '010')
classifier.addDocument('tôi cần tắt đèn tại phòng ngủ', '010')
classifier.addDocument('tôi muốn tắt đèn ở phòng ngủ', '010')
classifier.addDocument('cần tắt đèn tại phòng ngủ', '010')
classifier.addDocument('nhờ bạn tắt giúp đèn phòng ngủ', '010')
classifier.addDocument('giúp tắt đèn chỗ phòng ngủ', '010')
classifier.addDocument('hãy tắt đèn phòng ngủ', '010')
classifier.addDocument('tôi cần tắt đèn tại phòng ngủ', '010')
classifier.addDocument('ngừng chiếu sáng ở căn phòng ngủ', '010')
classifier.addDocument('đang cần tắt đèn tại phòng ngủ', '010')
classifier.addDocument('ý định tắt đèn ở phòng ngủ', '010')
classifier.addDocument('tắt ánh sáng tại chỗ phòng ngủ', '010')
classifier.addDocument('ngừng hoạt động đèn ở phòng ngủ', '010')
classifier.addDocument('dừng chiếu sáng trong căn phòng ngủ', '010')
classifier.addDocument('ý định tắt đèn tại nơi phòng ngủ', '010')
classifier.addDocument('đang muốn tắt đèn tại phòng ngủ', '010')
classifier.addDocument('tắt ánh sáng tại phòng ngủ', '010')
classifier.addDocument('ngừng hoạt động đèn tại chỗ phòng ngủ', '010')
classifier.addDocument('dự định tắt đèn ở nơi phòng ngủ', '010')
classifier.addDocument('muốn tắt đèn tại phòng ngủ', '010')
classifier.addDocument('tắt ánh sáng trong căn phòng ngủ', '010')
classifier.addDocument('đang có ý muốn tắt đèn tại chỗ phòng ngủ', '010')
classifier.addDocument('ngừng chiếu sáng tại phòng ngủ', '010')
classifier.addDocument('dự định tắt đèn trong căn phòng ngủ', '010')
classifier.addDocument('muốn tắt ánh sáng ở phòng ngủ', '010')
classifier.addDocument('đang có ý muốn tắt đèn tại nơi phòng ngủ', '010')
classifier.addDocument('ngừng chiếu sáng tại nơi phòng ngủ', '010')
classifier.addDocument('dự định tắt ánh sáng ở phòng ngủ', '010')
classifier.addDocument('muốn tắt đèn trong căn phòng ngủ', '010')
classifier.addDocument('đang có ý muốn tắt ánh sáng tại chỗ phòng ngủ', '010')
classifier.addDocument('ngừng hoạt động đèn trong căn phòng ngủ', '010')
classifier.addDocument('dự định tắt ánh sáng tại phòng ngủ', '010')
classifier.addDocument('muốn tắt đèn trong căn phòng ngủ', '010')
classifier.addDocument('đang có ý muốn tắt ánh sáng ở nơi phòng ngủ', '010')
classifier.addDocument('ngừng hoạt động đèn tại nơi phòng ngủ', '010')
classifier.addDocument('dự định tắt ánh sáng trong căn phòng ngủ', '010')
classifier.addDocument('muốn tắt đèn tại chỗ phòng ngủ', '010')
classifier.addDocument('đang có ý muốn tắt ánh sáng ở nơi phòng ngủ', '010')

classifier.addDocument('tắt quạt ở phòng ngủ', '011')
classifier.addDocument('tôi cần tắt quạt tại phòng ngủ', '011')
classifier.addDocument('tôi muốn tắt quạt ở phòng ngủ', '011')
classifier.addDocument('cần tắt quạt tại phòng ngủ', '011')
classifier.addDocument('nhờ bạn tắt giúp quạt phòng ngủ', '011')
classifier.addDocument('giúp tắt quạt chỗ phòng ngủ', '011')
classifier.addDocument('hãy tắt quạt phòng ngủ', '011')
classifier.addDocument('tôi cần tắt quạt tại phòng ngủ', '011')
classifier.addDocument('ngừng hoạt động quạt ở căn phòng ngủ', '011')
classifier.addDocument('đang cần tắt quạt tại phòng ngủ', '011')
classifier.addDocument('ý định tắt quạt ở phòng ngủ', '011')
classifier.addDocument('tắt quạt tại chỗ phòng ngủ', '011')
classifier.addDocument('ngừng hoạt động quạt ở phòng ngủ', '011')
classifier.addDocument('dừng hoạt động quạt trong căn phòng ngủ', '011')
classifier.addDocument('ý định tắt quạt tại nơi phòng ngủ', '011')
classifier.addDocument('đang muốn tắt quạt tại phòng ngủ', '011')
classifier.addDocument('tắt quạt tại phòng ngủ', '011')
classifier.addDocument('ngừng hoạt động quạt tại chỗ phòng ngủ', '011')
classifier.addDocument('dự định tắt quạt ở nơi phòng ngủ', '011')
classifier.addDocument('muốn tắt quạt tại phòng ngủ', '011')
classifier.addDocument('ngừng hoạt động quạt trong căn phòng ngủ', '011')
classifier.addDocument('đang có ý muốn tắt quạt tại chỗ phòng ngủ', '011')
classifier.addDocument('ngừng hoạt động quạt tại nơi phòng ngủ', '011')
classifier.addDocument('dự định tắt quạt trong căn phòng ngủ', '011')
classifier.addDocument('muốn tắt quạt ở phòng ngủ', '011')
classifier.addDocument('đang có ý muốn tắt quạt tại nơi phòng ngủ', '011')
classifier.addDocument('ngừng hoạt động quạt ở nơi phòng ngủ', '011')
classifier.addDocument('dự định tắt quạt tại phòng ngủ', '011')
classifier.addDocument('muốn tắt quạt trong căn phòng ngủ', '011')
classifier.addDocument('đang có ý muốn tắt quạt tại chỗ phòng ngủ', '011')
classifier.addDocument('ngừng hoạt động quạt tại nơi phòng ngủ', '011')
classifier.addDocument('dự định tắt quạt trong căn phòng ngủ', '011')
classifier.addDocument('muốn tắt quạt tại phòng ngủ', '011')
classifier.addDocument('đang có ý muốn tắt quạt ở phòng ngủ', '011')
classifier.addDocument('ngừng hoạt động quạt tại chỗ phòng ngủ', '011')
classifier.addDocument('dự định tắt quạt tại nơi phòng ngủ', '011')
classifier.addDocument('muốn tắt quạt trong căn phòng ngủ', '011')
classifier.addDocument('đang có ý muốn tắt quạt ở nơi phòng ngủ', '011')

classifier.addDocument('bật đèn ở phòng ngủ', '110')
classifier.addDocument('tôi cần bật đèn tại phòng ngủ', '110')
classifier.addDocument('tôi muốn bật đèn ở phòng ngủ', '110')
classifier.addDocument('cần bật đèn tại phòng ngủ', '110')
classifier.addDocument('nhờ bạn bật giúp đèn phòng ngủ', '110')
classifier.addDocument('giúp bật đèn chỗ phòng ngủ', '110')
classifier.addDocument('hãy bật đèn phòng ngủ', '110')
classifier.addDocument('tôi cần bật đèn tại phòng ngủ', '110')
classifier.addDocument('mở đèn ở phòng ngủ', '110')
classifier.addDocument('tôi cần mở đèn tại phòng ngủ', '110')
classifier.addDocument('tôi muốn mở đèn ở phòng ngủ', '110')
classifier.addDocument('cần mở đèn tại phòng ngủ', '110')
classifier.addDocument('nhờ bạn mở giúp đèn phòng ngủ', '110')
classifier.addDocument('giúp mở đèn chỗ phòng ngủ', '110')
classifier.addDocument('hãy mở đèn phòng ngủ', '110')
classifier.addDocument('tôi cần mở đèn tại phòng ngủ', '110')

classifier.addDocument('bật quạt ở phòng ngủ', '111')
classifier.addDocument('tôi cần bật quạt tại phòng ngủ', '111')
classifier.addDocument('tôi muốn bật quạt ở phòng ngủ', '111')
classifier.addDocument('cần bật quạt tại phòng ngủ', '111')
classifier.addDocument('nhờ bạn bật giúp quạt phòng ngủ', '111')
classifier.addDocument('giúp bật quạt chỗ phòng ngủ', '111')
classifier.addDocument('hãy bật quạt phòng ngủ', '111')
classifier.addDocument('tôi cần bật quạt tại phòng ngủ', '111')
classifier.addDocument('mở quạt ở phòng ngủ', '111')
classifier.addDocument('tôi cần mở quạt tại phòng ngủ', '111')
classifier.addDocument('tôi muốn mở quạt ở phòng ngủ', '111')
classifier.addDocument('cần mở quạt tại phòng ngủ', '111')
classifier.addDocument('nhờ bạn mở giúp quạt phòng ngủ', '111')
classifier.addDocument('giúp mở quạt chỗ phòng ngủ', '111')
classifier.addDocument('hãy mở quạt phòng ngủ', '111')
classifier.addDocument('tôi cần mở quạt tại phòng ngủ', '111')
classifier.addDocument('bật quạt tại phòng ngủ', '111')
classifier.addDocument('bật quạt chỗ phòng ngủ', '111')
classifier.addDocument('bật máy quạt ở phòng ngủ', '111')
classifier.addDocument('bật quạt tại chỗ phòng ngủ', '111')
classifier.addDocument('kích hoạt quạt ở phòng ngủ', '111')
classifier.addDocument('mở máy quạt phòng ngủ', '111')
classifier.addDocument('chạy quạt tại phòng ngủ', '111')
classifier.addDocument('kích quạt ở phòng ngủ', '111')
classifier.addDocument('bật quạt chỗ phòng ngủ', '111')
classifier.addDocument('bật quạt phòng ngủ', '111')
classifier.addDocument('kích hoạt quạt tại phòng ngủ', '111')
classifier.addDocument('mở quạt chỗ phòng ngủ', '111')
classifier.addDocument('chạy quạt tại chỗ phòng ngủ', '111')
classifier.addDocument('kích máy quạt ở phòng ngủ', '111')
classifier.addDocument('bật quạt chỗ phòng ngủ', '111')
classifier.addDocument('bật quạt phòng ngủ', '111')
classifier.addDocument('kích hoạt quạt tại phòng ngủ', '111')
classifier.addDocument('mở quạt chỗ phòng ngủ', '111')
classifier.addDocument('chạy máy quạt tại phòng ngủ', '111')
classifier.addDocument('kích quạt ở chỗ phòng ngủ', '111')
classifier.addDocument('bật máy quạt phòng ngủ', '111')
classifier.addDocument('kích hoạt quạt ở chỗ phòng ngủ', '111')
classifier.addDocument('mở quạt tại phòng ngủ', '111')
classifier.addDocument('chạy quạt ở phòng ngủ', '111')
classifier.addDocument('kích máy quạt tại chỗ phòng ngủ', '111')
classifier.addDocument('bật quạt phòng ngủ', '111')



classifier.addDocument('đóng cửa ở phòng khách', '002')
classifier.addDocument('tôi cần đóng cửa tại phòng khách', '002')
classifier.addDocument('tôi muốn đóng cửa ở phòng khách', '002')
classifier.addDocument('cần đóng cửa tại phòng khách', '002')
classifier.addDocument('nhờ bạn đóng giúp cửa phòng khách', '002')
classifier.addDocument('giúp đóng cửa chỗ phòng khách', '002')
classifier.addDocument('hãy đóng cửa phòng khách', '002')
classifier.addDocument('tôi cần đóng cửa tại phòng khách', '002')
classifier.addDocument('đóng cửa tại căn phòng khách', '002')
classifier.addDocument('đang cần đóng cửa tại phòng khách', '002')
classifier.addDocument('ý định đóng cửa ở phòng khách', '002')
classifier.addDocument('đóng cửa tại chỗ phòng khách', '002')
classifier.addDocument('đóng cửa tại căn phòng khách', '002')
classifier.addDocument('ý định đóng cửa tại nơi phòng khách', '002')
classifier.addDocument('đang muốn đóng cửa tại phòng khách', '002')
classifier.addDocument('đóng cửa tại phòng khách', '002')
classifier.addDocument('dự định đóng cửa ở nơi phòng khách', '002')
classifier.addDocument('muốn đóng cửa tại phòng khách', '002')
classifier.addDocument('đang có ý muốn đóng cửa tại chỗ phòng khách', '002')
classifier.addDocument('dự định đóng cửa trong căn phòng khách', '002')
classifier.addDocument('muốn đóng cửa ở phòng khách', '002')
classifier.addDocument('đang có ý muốn đóng cửa tại nơi phòng khách', '002')
classifier.addDocument('dự định đóng cửa ở phòng khách', '002')
classifier.addDocument('muốn đóng cửa trong căn phòng khách', '002')
classifier.addDocument('đang có ý muốn đóng cửa tại chỗ phòng khách', '002')
classifier.addDocument('dự định đóng cửa tại nơi phòng khách', '002')
classifier.addDocument('muốn đóng cửa tại phòng khách', '002')
classifier.addDocument('đang có ý muốn đóng cửa ở phòng khách', '002')
classifier.addDocument('dự định đóng cửa tại nơi phòng khách', '002')
classifier.addDocument('muốn đóng cửa trong căn phòng khách', '002')
classifier.addDocument('đang có ý muốn đóng cửa tại nơi phòng khách', '002')

classifier.addDocument('đóng cửa ở phòng ngủ', '012')
classifier.addDocument('tôi cần đóng cửa tại phòng ngủ', '012')
classifier.addDocument('tôi muốn đóng cửa ở phòng ngủ', '012')
classifier.addDocument('cần đóng cửa tại phòng ngủ', '012')
classifier.addDocument('nhờ bạn đóng giúp cửa phòng ngủ', '012')
classifier.addDocument('giúp đóng cửa chỗ phòng ngủ', '012')
classifier.addDocument('hãy đóng cửa phòng ngủ', '012')
classifier.addDocument('tôi cần đóng cửa tại phòng ngủ', '012')
classifier.addDocument('đóng cửa tại căn phòng ngủ', '012')
classifier.addDocument('đang cần đóng cửa tại phòng ngủ', '012')
classifier.addDocument('ý định đóng cửa ở phòng ngủ', '012')
classifier.addDocument('đóng cửa tại chỗ phòng ngủ', '012')
classifier.addDocument('đóng cửa tại căn phòng ngủ', '012')
classifier.addDocument('ý định đóng cửa tại nơi phòng ngủ', '012')
classifier.addDocument('đang muốn đóng cửa tại phòng ngủ', '012')
classifier.addDocument('đóng cửa tại phòng ngủ', '012')
classifier.addDocument('dự định đóng cửa ở nơi phòng ngủ', '012')
classifier.addDocument('muốn đóng cửa tại phòng ngủ', '012')
classifier.addDocument('đang có ý muốn đóng cửa tại chỗ phòng ngủ', '012')
classifier.addDocument('dự định đóng cửa trong căn phòng ngủ', '012')
classifier.addDocument('muốn đóng cửa ở phòng ngủ', '012')
classifier.addDocument('đang có ý muốn đóng cửa tại nơi phòng ngủ', '012')
classifier.addDocument('dự định đóng cửa ở phòng ngủ', '012')
classifier.addDocument('muốn đóng cửa trong căn phòng ngủ', '012')
classifier.addDocument('đang có ý muốn đóng cửa tại chỗ phòng ngủ', '012')
classifier.addDocument('dự định đóng cửa tại nơi phòng ngủ', '012')
classifier.addDocument('muốn đóng cửa tại phòng ngủ', '012')
classifier.addDocument('đang có ý muốn đóng cửa ở phòng ngủ', '012')
classifier.addDocument('dự định đóng cửa tại nơi phòng ngủ', '012')
classifier.addDocument('muốn đóng cửa trong căn phòng ngủ', '012')
classifier.addDocument('đang có ý muốn đóng cửa tại nơi phòng ngủ', '012')


classifier.addDocument('mở cửa ở phòng khách', '102')
classifier.addDocument('tôi cần mở cửa tại phòng khách', '102')
classifier.addDocument('tôi muốn mở cửa ở phòng khách', '102')
classifier.addDocument('cần mở cửa tại phòng khách', '102')
classifier.addDocument('nhờ bạn mở giúp cửa phòng khách', '102')
classifier.addDocument('giúp mở cửa chỗ phòng khách', '102')
classifier.addDocument('hãy mở cửa phòng khách', '102')
classifier.addDocument('tôi cần mở cửa tại phòng khách', '102')
classifier.addDocument('mở cửa tại căn phòng khách', '102')
classifier.addDocument('đang cần mở cửa tại phòng khách', '102')
classifier.addDocument('ý định mở cửa ở phòng khách', '102')
classifier.addDocument('mở cửa tại chỗ phòng khách', '102')
classifier.addDocument('mở cửa tại căn phòng khách', '102')
classifier.addDocument('hoạt động cửa trong phòng khách', '102')
classifier.addDocument('ý định mở cửa tại nơi phòng khách', '102')
classifier.addDocument('đang muốn mở cửa tại phòng khách', '102')
classifier.addDocument('mở cửa tại phòng khách', '102')
classifier.addDocument('hoạt động cửa tại chỗ phòng khách', '102')
classifier.addDocument('dự định mở cửa ở nơi phòng khách', '102')
classifier.addDocument('muốn mở cửa tại phòng khách', '102')
classifier.addDocument('hoạt động cửa trong căn phòng khách', '102')
classifier.addDocument('đang có ý muốn mở cửa tại chỗ phòng khách', '102')
classifier.addDocument('hoạt động cửa tại nơi phòng khách', '102')
classifier.addDocument('dự định mở cửa trong căn phòng khách', '102')
classifier.addDocument('muốn mở cửa ở phòng khách', '102')
classifier.addDocument('đang có ý muốn mở cửa tại nơi phòng khách', '102')
classifier.addDocument('hoạt động cửa tại nơi phòng khách', '102')
classifier.addDocument('dự định mở cửa ở phòng khách', '102')
classifier.addDocument('muốn mở cửa trong căn phòng khách', '102')
classifier.addDocument('đang có ý muốn mở cửa tại chỗ phòng khách', '102')
classifier.addDocument('hoạt động cửa trong căn phòng khách', '102')
classifier.addDocument('dự định mở cửa tại nơi phòng khách', '102')
classifier.addDocument('muốn mở cửa tại phòng khách', '102')
classifier.addDocument('đang có ý muốn mở cửa ở phòng khách', '102')
classifier.addDocument('hoạt động cửa tại chỗ phòng khách', '102')
classifier.addDocument('dự định mở cửa tại nơi phòng khách', '102')
classifier.addDocument('muốn mở cửa trong căn phòng khách', '102')
classifier.addDocument('đang có ý muốn mở cửa tại nơi phòng khách', '102')

classifier.addDocument('mở cửa ở phòng ngủ', '112')
classifier.addDocument('tôi cần mở cửa tại phòng ngủ', '112')
classifier.addDocument('tôi muốn mở cửa ở phòng ngủ', '112')
classifier.addDocument('cần mở cửa tại phòng ngủ', '112')
classifier.addDocument('nhờ bạn mở giúp cửa phòng ngủ', '112')
classifier.addDocument('giúp mở cửa chỗ phòng ngủ', '112')
classifier.addDocument('hãy mở cửa phòng ngủ', '112')
classifier.addDocument('tôi cần mở cửa tại phòng ngủ', '112')
classifier.addDocument('mở cửa tại căn phòng ngủ', '112')
classifier.addDocument('đang cần mở cửa tại phòng ngủ', '112')
classifier.addDocument('ý định mở cửa ở phòng ngủ', '112')
classifier.addDocument('mở cửa tại chỗ phòng ngủ', '112')
classifier.addDocument('mở cửa tại căn phòng ngủ', '112')
classifier.addDocument('hoạt động cửa trong phòng ngủ', '112')
classifier.addDocument('ý định mở cửa tại nơi phòng ngủ', '112')
classifier.addDocument('đang muốn mở cửa tại phòng ngủ', '112')
classifier.addDocument('mở cửa tại phòng ngủ', '112')
classifier.addDocument('hoạt động cửa tại chỗ phòng ngủ', '112')
classifier.addDocument('dự định mở cửa ở nơi phòng ngủ', '112')
classifier.addDocument('muốn mở cửa tại phòng ngủ', '112')
classifier.addDocument('hoạt động cửa trong căn phòng ngủ', '112')
classifier.addDocument('đang có ý muốn mở cửa tại chỗ phòng ngủ', '112')
classifier.addDocument('hoạt động cửa tại nơi phòng ngủ', '112')
classifier.addDocument('dự định mở cửa trong căn phòng ngủ', '112')
classifier.addDocument('muốn mở cửa ở phòng ngủ', '112')
classifier.addDocument('đang có ý muốn mở cửa tại nơi phòng ngủ', '112')
classifier.addDocument('hoạt động cửa tại nơi phòng ngủ', '112')
classifier.addDocument('dự định mở cửa ở phòng ngủ', '112')
classifier.addDocument('muốn mở cửa trong căn phòng ngủ', '112')
classifier.addDocument('đang có ý muốn mở cửa tại chỗ phòng ngủ', '112')
classifier.addDocument('hoạt động cửa trong căn phòng ngủ', '112')
classifier.addDocument('dự định mở cửa tại nơi phòng ngủ', '112')
classifier.addDocument('muốn mở cửa tại phòng ngủ', '112')
classifier.addDocument('đang có ý muốn mở cửa ở phòng ngủ', '112')
classifier.addDocument('hoạt động cửa tại chỗ phòng ngủ', '112')
classifier.addDocument('dự định mở cửa tại nơi phòng ngủ', '112')
classifier.addDocument('muốn mở cửa trong căn phòng ngủ', '112')
classifier.addDocument('đang có ý muốn mở cửa tại nơi phòng ngủ', '112')
//  002 012 102 112

//no command
classifier.addDocument('cái này thật đáng yêu!', '2xx');
classifier.addDocument('tôi thấy bất ngờ!', '2xx');
classifier.addDocument('kết quả tuyệt vời!', '2xx');
classifier.addDocument('trời sao đẹp thế!', '2xx');
classifier.addDocument('ngày hôm nay thật ấm áp!', '2xx');
classifier.addDocument('tôi yêu màu xanh lá cây!', '2xx');
classifier.addDocument('cảm giác mùa hè thật dễ chịu!', '2xx');
classifier.addDocument('chúc mừng sinh nhật!', '2xx');
classifier.addDocument('tôi cảm thấy hứng thú!', '2xx');
classifier.addDocument('tôi đang xem bóng đá!', '2xx');
classifier.addDocument('nghỉ ngơi là một điều quan trọng!', '2xx');
classifier.addDocument('đây là cuốn sách hay nhất mà tôi từng đọc!', '2xx');
classifier.addDocument('thời tiết hôm nay thật dễ chịu!', '2xx');
classifier.addDocument('cuộc sống vui vẻ thật tuyệt!', '2xx');
classifier.addDocument('tôi thích ngắm hoàng hôn!', '2xx');
classifier.addDocument('trái cây rất tốt cho sức khỏe!', '2xx');
classifier.addDocument('đó là bức tranh đẹp nhất mà tôi từng thấy!', '2xx');
classifier.addDocument('cuối tuần này, tôi dự định đi chơi cùng bạn bè!', '2xx');
classifier.addDocument('tôi cảm thấy hạnh phúc!', '2xx');
classifier.addDocument('đi du lịch là niềm vui của tôi!', '2xx');
classifier.addDocument('chúng ta đã làm việc tốt!', '2xx');
classifier.addDocument('đây là bản nhạc yêu thích của tôi!', '2xx');
classifier.addDocument('tôi cảm thấy tự hào về thành tựu của mình!', '2xx');
classifier.addDocument('cuộc sống thật tuyệt vời!', '2xx');
classifier.addDocument('tôi đã học được điều mới hôm nay!', '2xx');
classifier.addDocument('đó là một bữa ăn ngon!', '2xx');
classifier.addDocument('tôi thích ngồi bên cửa sổ!', '2xx');
classifier.addDocument('đọc sách là một thú vui!', '2xx');
classifier.addDocument('cái này thật thú vị!', '2xx');
classifier.addDocument('tôi đã tận hưởng ngày hôm nay!', '2xx');
classifier.addDocument('bạn có muốn đi dạo không?', '2xx');
classifier.addDocument('Cảm giác như thế nào khi ở bên gia đình?', '2xx');
classifier.addDocument('bạn đã từng đi du lịch ở nước ngoài chưa?', '2xx');
classifier.addDocument('bạn thích ăn món ăn gì nhất?', '2xx');
classifier.addDocument('tại sao bạn thích chơi thể thao?', '2xx');
classifier.addDocument('bạn có dự định đi xem phim vào cuối tuần này không?', '2xx');
classifier.addDocument('cuộc sống ở thành phố và ở nông thôn có gì khác biệt?', '2xx');
classifier.addDocument('bạn đã từng thử món ăn mới chưa?', '2xx');
classifier.addDocument('Cuộc sống của bạn hiện tại có hạnh phúc không?', '2xx');
classifier.addDocument('bạn đã từng tham gia hoạt động từ thiện chưa?', '2xx');
classifier.addDocument('cuốn sách cuối cùng bạn đã đọc là gì?', '2xx');
classifier.addDocument('bạn muốn học cái gì mới không?', '2xx');
classifier.addDocument('bạn có sở thích nấu ăn không?', '2xx');
classifier.addDocument('alo, bạn có thấy tôi không?', '2xx');
classifier.addDocument('xin chào, chúc bạn một ngày vui vẻ!', '2xx');
classifier.addDocument('alo, ai đang gọi điện?', '2xx');
classifier.addDocument('xin chào, bạn muốn đi ăn cùng tôi không?', '2xx');
classifier.addDocument('alo, cuộc sống của bạn thế nào?', '2xx');
classifier.addDocument('xin chào, bạn có nhớ tôi không?', '2xx');
classifier.addDocument('alo, bạn đã ăn sáng chưa?', '2xx');
classifier.addDocument('xin chào, bạn muốn hẹn hò vào cuối tuần này không?', '2xx');
classifier.addDocument('alo, tôi đang cần giúp đỡ!', '2xx');
classifier.addDocument('xin chào, tôi có thể giúp gì cho bạn?', '2xx');
classifier.addDocument('alo, bạn đã nhận được tin nhắn của tôi chưa?', '2xx');
classifier.addDocument('bạn đã từng đi du lịch một mình chưa?', '2xx');
classifier.addDocument('bạn có quan tâm đến chủ đề gì ngoài công việc hiện tại?', '2xx');
classifier.addDocument('bạn thường làm gì để giải tỏa căng thẳng?', '2xx');
classifier.addDocument('bạn có những kế hoạch gì trong tương lai?', '2xx');
classifier.addDocument('bạn thích ngắm hoàng hôn hay bình minh hơn?', '2xx');
classifier.addDocument('bạn thường dành thời gian như thế nào vào cuối tuần?', '2xx');
classifier.addDocument('bạn có điều gì muốn chia sẻ với tôi không?', '2xx');
classifier.addDocument('tạm biệt', '2xx');
classifier.addDocument('tạm biệt nhé', '2xx');
classifier.addDocument('bạn muốn đạt được điều gì trong năm tới?', '2xx');
classifier.addDocument('bạn đã từng có trải nghiệm thú vị nào khi du lịch không?', '2xx');
classifier.addDocument('bạn có ước mơ gì trong cuộc sống?', '2xx');
classifier.addDocument('bạn thường tỏ ra bình tĩnh hay nhanh nóng?', '2xx');
classifier.addDocument('bạn thích điều gì nhất trong công việc của mình?', '2xx');
classifier.addDocument('bạn đã từng có trải nghiệm hài hước nào không?', '2xx');
classifier.addDocument('bạn muốn học một ngôn ngữ nào nữa không?', '2xx');
classifier.addDocument('bạn đã từng thấy mưa bão không?', '2xx');
classifier.addDocument('bạn có thích làm việc nhóm hay làm việc độc lập hơn?', '2xx');

classifier.train();


// const result = classifier.classify('bật đèn phòng khách');
// console.log(commandHandle(result));


module.exports = classifier;