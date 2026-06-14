// --- SYSTEM LOCAL RECOVERY & DATA STRUCTURE CACHES ---
// COMPLETE GAYATHRISM ARTWORK DATABASE (164 Items)
const MASTER_DATABASE = { 
    rawMaterials: [
        { id: 'rm_1', name: 'Bangles Normal base 1 Box', unit: 'Pcs', qty: 1, cost: 120, stock: 1000 },
        { id: 'rm_2', name: 'Bangles Flat base 1 Box', unit: 'Pcs', qty: 1, cost: 130, stock: 1000 },
        { id: 'rm_3', name: 'Thread 1pc', unit: 'Reel', qty: 1, cost: 18, stock: 1000 },
        { id: 'rm_4', name: 'Thread 1 box (10pcs)', unit: 'Pcs', qty: 10, cost: 160, stock: 1000 },
        { id: 'rm_5', name: 'Fevicryl Glue Cone 1pc', unit: 'Pcs', qty: 1, cost: 15, stock: 1000 },
        { id: 'rm_5b', name: 'Fevicryl Glue Tube 30g', unit: 'Pcs', qty: 1, cost: 20, stock: 1000 },
        { id: 'rm_6', name: 'B7000 Glue 1pc 50ml', unit: 'Pcs', qty: 1, cost: 60, stock: 1000 },
        { id: 'rm_7', name: 'Glue pen and stick', unit: 'Pcs', qty: 1, cost: 40, stock: 1000 },
        { id: 'rm_8', name: 'Thread Cutter 1pc', unit: 'Pcs', qty: 1, cost: 20, stock: 1000 },
        { id: 'rm_9', name: 'Nose plier Big 1 pc', unit: 'Pcs', qty: 1, cost: 80, stock: 1000 },
        { id: 'rm_10', name: 'Wire cutter Big 1pc', unit: 'Pcs', qty: 1, cost: 80, stock: 1000 },
        { id: 'rm_11', name: 'Punch hole big 1pc', unit: 'Pcs', qty: 1, cost: 150, stock: 1000 },
        { id: 'rm_12', name: 'White and Gold kundans 10g', unit: 'Grm', qty: 10, cost: 15, stock: 1000 },
        { id: 'rm_13', name: 'White and Gold kundans rare shapes 10g', unit: 'Grm', qty: 10, cost: 18, stock: 1000 },
        { id: 'rm_14', name: 'Pearl white and Pearl Gold 10g', unit: 'Grm', qty: 10, cost: 18, stock: 1000 },
        { id: 'rm_15', name: 'Kundans colors matt 10g', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_16', name: 'Kundans colors glossy 10g', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_17', name: 'Square kundans colors 1st quality 10g', unit: 'Grm', qty: 10, cost: 45, stock: 1000 },
        { id: 'rm_18', name: 'Square kundans 2nd quality 10g', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_19', name: 'Moon shape matt 10g', unit: 'Grm', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_20', name: 'Stone chain white and gold 1 mtr', unit: 'Mtr', qty: 1, cost: 20, stock: 1000 },
        { id: 'rm_21', name: 'Stone chain colors 1mtr', unit: 'Mtr', qty: 1, cost: 30, stock: 1000 },
        { id: 'rm_22', name: 'Ball chain 1mtr', unit: 'Mtr', qty: 1, cost: 9, stock: 1000 },
        { id: 'rm_23', name: 'Coins 1st quality 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_24', name: 'Zardhosi 10g', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_25', name: 'Chakri gold 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_26', name: 'Jargon stones 10g', unit: 'Grm', qty: 10, cost: 35, stock: 1000 },
        { id: 'rm_27', name: 'Center clip small', unit: 'Pcs', qty: 1, cost: 8, stock: 1000 },
        { id: 'rm_28', name: 'Center clip Medium', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_29', name: 'Center clip Big', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_30', name: 'Tic tac clips Black 6 pairs', unit: 'Pcs', qty: 6, cost: 36, stock: 1000 },
        { id: 'rm_31', name: 'Tic tac Golden 6 pairs', unit: 'Pcs', qty: 6, cost: 60, stock: 1000 },
        { id: 'rm_32', name: 'Saree pin 1 dozen 12pcs', unit: 'Pcs', qty: 12, cost: 80, stock: 1000 },
        { id: 'rm_33', name: 'Saree pin ½ dozen 6pcs', unit: 'Pcs', qty: 6, cost: 40, stock: 1000 },
        { id: 'rm_34', name: 'Saree pin Metal 10pcs', unit: 'Pcs', qty: 10, cost: 40, stock: 1000 },
        { id: 'rm_35', name: 'Hair pin 1 set (1st quality)', unit: 'Pcs', qty: 1, cost: 20, stock: 1000 },
        { id: 'rm_36', name: 'Head band metal 3mm and 5mm 1 pc', unit: 'Pcs', qty: 1, cost: 20, stock: 1000 },
        { id: 'rm_37', name: 'MDF round small 10pcs', unit: 'Pcs', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_38', name: 'MDF round medium 10pcs', unit: 'Pcs', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_39', name: 'MDF round Large 10pcs', unit: 'Pcs', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_40', name: 'MDF round Extra-large 10pcs', unit: 'Pcs', qty: 10, cost: 35, stock: 1000 },
        { id: 'rm_41', name: 'MDF Other shapes 10pcs', unit: 'Pcs', qty: 10, cost: 40, stock: 1000 },
        { id: 'rm_42', name: 'Black rubber band 1pc', unit: 'Pcs', qty: 1, cost: 3, stock: 1000 },
        { id: 'rm_43', name: 'Band Attacher 1pc', unit: 'Pcs', qty: 1, cost: 3, stock: 1000 },
        { id: 'rm_44', name: 'Finger ring base 5 pcs', unit: 'Pcs', qty: 5, cost: 10, stock: 1000 },
        { id: 'rm_45', name: 'finger Ring base Tarnish finish 1st quality 5 pc', unit: 'Pcs', qty: 5, cost: 50, stock: 1000 },
        { id: 'rm_46', name: 'Jhumka base 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_47', name: 'Donut ring 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_48', name: 'Metal stud base 10g', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_49', name: 'Stud stopper 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_50', name: 'Ring stud base 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_51', name: 'Clutch clips 5 pcs small', unit: 'Pcs', qty: 5, cost: 25, stock: 1000 },
        { id: 'rm_52', name: 'Clutch clips 5 pcs big', unit: 'Pcs', qty: 5, cost: 30, stock: 1000 },
        { id: 'rm_53', name: 'Alligator clips small 1pc', unit: 'Pcs', qty: 1, cost: 3, stock: 1000 },
        { id: 'rm_54', name: 'Alligator clip medium 1 pc', unit: 'Pcs', qty: 1, cost: 5, stock: 1000 },
        { id: 'rm_55', name: 'Gier wire 1 roll pc', unit: 'Pcs', qty: 1, cost: 45, stock: 1000 },
        { id: 'rm_56', name: 'Neck piece Dori 1pcs', unit: 'Pcs', qty: 1, cost: 15, stock: 1000 },
        { id: 'rm_57', name: 'Gear lock beads 5g', unit: 'Grm', qty: 5, cost: 50, stock: 1000 },
        { id: 'rm_58', name: 'Eye pin 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_59', name: 'Jump ring 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_60', name: 'S hook 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_61', name: 'Wax brown sheet 5pcs', unit: 'Pcs', qty: 5, cost: 10, stock: 1000 },
        { id: 'rm_62', name: 'OHP sheet 1 pc', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_63', name: 'Loreals 10g', unit: 'Grm', qty: 10, cost: 35, stock: 1000 },
        { id: 'rm_64', name: 'Pearl chain 1 mtr', unit: 'Mtr', qty: 1, cost: 70, stock: 1000 },
        { id: 'rm_65', name: 'U pin 5 pcs', unit: 'Pcs', qty: 5, cost: 10, stock: 1000 },
        { id: 'rm_66', name: 'Bracelet 1 pc', unit: 'Pcs', qty: 1, cost: 15, stock: 1000 },
        { id: 'rm_67', name: 'Crystal tec Elastic 1pc', unit: 'Pcs', qty: 1, cost: 25, stock: 1000 },
        { id: 'rm_68', name: 'A1 zari thread 1pc', unit: 'Reel', qty: 1, cost: 18, stock: 1000 },
        { id: 'rm_69', name: 'Gimp wire 10g', unit: 'Grm', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_70', name: 'Felt sheet 1 pc A4 sheet size', unit: 'Pcs', qty: 1, cost: 35, stock: 1000 },
        { id: 'rm_71', name: 'Leather sheet ½ A4 sheet size 1pc', unit: 'Pcs', qty: 1, cost: 25, stock: 1000 },
        { id: 'rm_72', name: 'Sugar beads matt 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_73', name: 'Sugar beads glossy 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_74', name: 'Curdhana beads 10g', unit: 'Grm', qty: 10, cost: 15, stock: 1000 },
        { id: 'rm_75', name: 'Salli tube 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_76', name: 'Salli tube long 10g', unit: 'Grm', qty: 10, cost: 15, stock: 1000 },
        { id: 'rm_77', name: 'Side hole sequence 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_78', name: 'sequence 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_79', name: 'Sequence double shade 10g', unit: 'Grm', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_80', name: 'Stocking cloth small 1pc', unit: 'Pcs', qty: 1, cost: 5, stock: 1000 },
        { id: 'rm_81', name: 'Stocking cloth big 1pc', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_82', name: 'Stocking wire 5pcs', unit: 'Pcs', qty: 5, cost: 10, stock: 1000 },
        { id: 'rm_83', name: 'Shells 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_84', name: 'Shell’s gold outline 10g', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_85', name: 'Daisy flower 10g', unit: 'Grm', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_86', name: 'Lotus petal beads 10g', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_87', name: 'Satin ribbon role 1 inch 1pc', unit: 'Pcs', qty: 1, cost: 100, stock: 1000 },
        { id: 'rm_88', name: 'Satin ribbon role ½ inch 1pc', unit: 'Pcs', qty: 1, cost: 90, stock: 1000 },
        { id: 'rm_89', name: 'Organza ribbon role 1inch 1pc', unit: 'Pcs', qty: 1, cost: 100, stock: 1000 },
        { id: 'rm_90', name: 'Organza ribbon role ½ inch 1pc', unit: 'Pcs', qty: 1, cost: 90, stock: 1000 },
        { id: 'rm_91', name: 'Pollens 1 punch', unit: 'Pcs', qty: 1, cost: 25, stock: 1000 },
        { id: 'rm_92', name: 'Net cloth 1mtr', unit: 'Mtr', qty: 1, cost: 40, stock: 1000 },
        { id: 'rm_93', name: 'Zardhosi needle 1 packet', unit: 'Pcs', qty: 1, cost: 50, stock: 1000 },
        { id: 'rm_94', name: 'French knot needle 1 packet', unit: 'Pcs', qty: 1, cost: 45, stock: 1000 },
        { id: 'rm_95', name: 'Flower antique cap 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_96', name: 'Crystal beads 1-line 4mm', unit: 'Pcs', qty: 1, cost: 20, stock: 1000 },
        { id: 'rm_97', name: 'Aari wooden ring 10-inch 1pc', unit: 'Pcs', qty: 1, cost: 50, stock: 1000 },
        { id: 'rm_98', name: 'Mini Iron Box 1 pc', unit: 'Pcs', qty: 1, cost: 700, stock: 1000 },
        { id: 'rm_99', name: 'Cone Zari thread 1 pc', unit: 'Reel', qty: 1, cost: 100, stock: 1000 },
        { id: 'rm_100', name: 'UV Resin 10g', unit: 'Grm', qty: 10, cost: 120, stock: 1000 },
        { id: 'rm_101', name: 'UV Lamp 1pc', unit: 'Pcs', qty: 1, cost: 150, stock: 1000 },
        { id: 'rm_102', name: 'Resin Tape', unit: 'Pcs', qty: 1, cost: 120, stock: 1000 },
        { id: 'rm_103', name: 'Dry flower 1box', unit: 'Pcs', qty: 1, cost: 130, stock: 1000 },
        { id: 'rm_104', name: 'Drilling holes machine', unit: 'Pcs', qty: 1, cost: 650, stock: 1000 },
        { id: 'rm_105', name: 'Soldering Machine 1pc', unit: 'Pcs', qty: 1, cost: 180, stock: 1000 },
        { id: 'rm_106', name: 'Gungroo Beads 10g', unit: 'Grm', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_107', name: '3 hole connectors 1pc', unit: 'Pcs', qty: 1, cost: 3, stock: 1000 },
        { id: 'rm_108', name: '5 hole connectors 1 pc', unit: 'Pcs', qty: 1, cost: 5, stock: 1000 },
        { id: 'rm_109', name: 'Big center neck connector 1 pc', unit: 'Pcs', qty: 1, cost: 20, stock: 1000 },
        { id: 'rm_110', name: 'Canvas sheet ½ mtr', unit: 'Mtr', qty: 0.5, cost: 80, stock: 1000 },
        { id: 'rm_111', name: '200 GSM paper A4 sheet 1pc', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_112', name: 'Cotton Thread 1 pc', unit: 'Reel', qty: 1, cost: 35, stock: 1000 },
        { id: 'rm_113', name: 'Gotta Patti lace 5mtr', unit: 'Mtr', qty: 5, cost: 25, stock: 1000 },
        { id: 'rm_114', name: 'White marking pencil 1 pc', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_115', name: 'Nylon Thread 1pc', unit: 'Reel', qty: 1, cost: 15, stock: 1000 },
        { id: 'rm_116', name: 'Cut out shapes 10g', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_117', name: 'Zardhosi Nakshi 10g', unit: 'Grm', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_118', name: 'Antique pieces like ganesh 10g', unit: 'Grm', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_119', name: 'Plastic Round beads 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_120', name: 'Mirror 10g', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_121', name: 'Bangle plastic box round small', unit: 'Pcs', qty: 1, cost: 5, stock: 1000 },
        { id: 'rm_122', name: 'Bangle plastic box round big 1 box', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_123', name: '5*8 size drop clip stones 1 pc', unit: 'Pcs', qty: 1, cost: 3, stock: 1000 },
        { id: 'rm_124', name: '10*6 size drop clip stone 1pc', unit: 'Pcs', qty: 1, cost: 4, stock: 1000 },
        { id: 'rm_125', name: '13*8 size drop clip stone 1pc', unit: 'Pcs', qty: 1, cost: 6, stock: 1000 },
        { id: 'rm_126', name: '10*5 size eye clip stone 1pc', unit: 'Pcs', qty: 1, cost: 5, stock: 1000 },
        { id: 'rm_127', name: '15*7 size eye clip stone 1pc', unit: 'Pcs', qty: 1, cost: 8, stock: 1000 },
        { id: 'rm_128', name: '10*5 size tube clip stone 1pc', unit: 'Pcs', qty: 1, cost: 6, stock: 1000 },
        { id: 'rm_129', name: 'Grey packing cover 6*8 size 5pcs', unit: 'Pcs', qty: 5, cost: 15, stock: 1000 },
        { id: 'rm_130', name: 'Grey packing cover 8*10 size 5pcs', unit: 'Pcs', qty: 5, cost: 30, stock: 1000 },
        { id: 'rm_131', name: 'Grey packing cover 10*14 size 5pcs', unit: 'Pcs', qty: 5, cost: 40, stock: 1000 },
        { id: 'rm_132', name: '24 partition box 1 pc', unit: 'Pcs', qty: 1, cost: 200, stock: 1000 },
        { id: 'rm_133', name: 'Clipstones 12ss white and gold 1 groos 5g', unit: 'Grm', qty: 5, cost: 35, stock: 1000 },
        { id: 'rm_134', name: 'Clipstones 14ss white and gold 1 groos 5g', unit: 'Grm', qty: 5, cost: 35, stock: 1000 },
        { id: 'rm_135', name: 'Clipstones 28ss White and gold 1 groos 5g', unit: 'Grm', qty: 5, cost: 35, stock: 1000 },
        { id: 'rm_136', name: 'Clipstones colors 1 groos 5g', unit: 'Grm', qty: 5, cost: 45, stock: 1000 },
        { id: 'rm_137', name: 'Clipstones oval shape dollar 1 pc', unit: 'Pcs', qty: 1, cost: 25, stock: 1000 },
        { id: 'rm_138', name: 'Clipstone 10*14 size Rectangle1pc', unit: 'Pcs', qty: 1, cost: 9, stock: 1000 },
        { id: 'rm_139', name: 'Clipstone 10*8 Rectangle size 1 pc', unit: 'Pcs', qty: 1, cost: 6, stock: 1000 },
        { id: 'rm_140', name: 'Clipstone 10*14 size Oval 1pc', unit: 'Pcs', qty: 1, cost: 9, stock: 1000 },
        { id: 'rm_141', name: 'Clipstone 10*8 Oval size 1 pc', unit: 'Pcs', qty: 1, cost: 6, stock: 1000 },
        { id: 'rm_142', name: 'Jasmine bud Premium Quality 1 box 100 pcs', unit: 'Pcs', qty: 100, cost: 600, stock: 1000 },
        { id: 'rm_143', name: 'Scrunchies Elastic 5 mtr', unit: 'Mtr', qty: 5, cost: 100, stock: 1000 },
        { id: 'rm_144', name: 'Plain Satin cloth 1 mtr', unit: 'Mtr', qty: 1, cost: 150, stock: 1000 },
        { id: 'rm_145', name: 'Printed Satin 1 mtr', unit: 'Mtr', qty: 1, cost: 230, stock: 1000 },
        { id: 'rm_146', name: 'Printed cotton Fabric 1 mtr', unit: 'Mtr', qty: 1, cost: 250, stock: 1000 },
        { id: 'rm_147', name: 'Designer lace 1 mtr', unit: 'Mtr', qty: 1, cost: 20, stock: 1000 },
        { id: 'rm_148', name: 'MDF Donut Very small 10pcs', unit: 'Pcs', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_149', name: 'MDF Donut Medium 10pcs', unit: 'Pcs', qty: 10, cost: 40, stock: 1000 },
        { id: 'rm_150', name: 'MDF Donut Big 10pcs', unit: 'Pcs', qty: 10, cost: 55, stock: 1000 },
        { id: 'rm_151', name: 'MDF Donut Large 10pcs', unit: 'Pcs', qty: 10, cost: 65, stock: 1000 },
        { id: 'rm_152', name: 'Silk thread jewelry kit no 1', unit: 'Pcs', qty: 1, cost: 500, stock: 1000 },
        { id: 'rm_153', name: 'Silk thread jewelry kit no 2', unit: 'Pcs', qty: 1, cost: 1000, stock: 1000 },
        { id: 'rm_154', name: 'Silk thread jewelry kit no 3', unit: 'Pcs', qty: 1, cost: 1500, stock: 1000 },
        { id: 'rm_155', name: 'Silk thread jewelry kit no 4', unit: 'Pcs', qty: 1, cost: 2000, stock: 1000 },
        { id: 'rm_156', name: 'Silk thread jewelry kit no 5', unit: 'Pcs', qty: 1, cost: 1000, stock: 1000 },
        { id: 'rm_157', name: 'Brooches kit', unit: 'Pcs', qty: 1, cost: 1200, stock: 1000 },
        { id: 'rm_158', name: 'Fabric Jewelry kit', unit: 'Pcs', qty: 1, cost: 1400, stock: 1000 },
        { id: 'rm_159', name: 'Cotton Thread Jewelry kit', unit: 'Pcs', qty: 1, cost: 1000, stock: 1000 },
        { id: 'rm_160', name: 'Resin Jewelry kit', unit: 'Pcs', qty: 1, cost: 1200, stock: 1000 },
        { id: 'rm_161', name: 'Invisible Jewelry kit', unit: 'Pcs', qty: 1, cost: 500, stock: 1000 },
        { id: 'rm_162', name: 'Jothika set Jewelry kit', unit: 'Pcs', qty: 1, cost: 500, stock: 1000 },
        { id: 'rm_163', name: 'Silk Thread Business Kit 1', unit: 'Pcs', qty: 1, cost: 10000, stock: 1000 },
        { id: 'rm_164', name: 'Silk Thread Business Kit 2', unit: 'Pcs', qty: 1, cost: 6000, stock: 1000 }
    ],
    labor: [],
    packing: []
};

// --- DATA INITIALIZATION ---
// We check if the user has a custom inventory. If not, we force-load the 164 master items.
let savedInv = localStorage.getItem('valaya_inv_v4');
let inventory = savedInv ? JSON.parse(savedInv) : JSON.parse(JSON.stringify(MASTER_DATABASE));

// If the inventory was loaded but is missing items, merge it
if (inventory.rawMaterials.length < 5) {
    inventory = JSON.parse(JSON.stringify(MASTER_DATABASE));
}

let savedBills = JSON.parse(localStorage.getItem('valaya_saved_v3')) || [];
let currentBill = JSON.parse(localStorage.getItem('valaya_bill_v3')) || { 
    id: '', customer: '', phone: '', address: '', date: '', notes: '', 
    productList: [], items: [], courier: 0, discount: 0 
};

// --- STARTUP ---
document.addEventListener('DOMContentLoaded', () => {
    initWorkspaceMeta();
    renderInventoryTables();
    populateItemDropdown();
    renderInvoiceItems();
    renderSavedBillsTable();
    setupCoreActionListeners();
    rebuildAnalyticsDashboard();
});

function initWorkspaceMeta() {
    if (!currentBill.id) {
        currentBill.id = 'VAL-' + Math.floor(100000 + Math.random() * 900000);
        currentBill.date = new Date().toLocaleDateString('en-IN');
    }
    document.getElementById('lbl-bill-id').textContent = currentBill.id;
    document.getElementById('lbl-bill-date').textContent = currentBill.date;
    updateLiveDocumentTextLabels();
}

function setupCoreActionListeners() {
    // Inventory Management
    document.getElementById('form-raw-material').addEventListener('submit', (e) => {
        e.preventDefault();
        inventory.rawMaterials.push({
            id: 'rm_' + Date.now(),
            name: document.getElementById('rm-name').value,
            unit: document.getElementById('rm-unit-select').value,
            qty: parseFloat(document.getElementById('rm-pack-qty').value),
            cost: parseFloat(document.getElementById('rm-pack-cost').value),
            stock: parseFloat(document.getElementById('rm-stock').value)
        });
        saveAndSyncInventory(); e.target.reset();
    });

    document.getElementById('form-labor').addEventListener('submit', (e) => {
        e.preventDefault();
        inventory.labor.push({
            id: 'lb_' + Date.now(),
            name: document.getElementById('labor-name').value,
            rate: parseFloat(document.getElementById('labor-rate').value)
        });
        saveAndSyncInventory(); e.target.reset();
    });

    document.getElementById('form-packing').addEventListener('submit', (e) => {
        e.preventDefault();
        inventory.packing.push({
            id: 'pk_' + Date.now(),
            name: document.getElementById('packing-name').value,
            unit: document.getElementById('packing-unit').value,
            price: parseFloat(document.getElementById('packing-price').value)
        });
        saveAndSyncInventory(); e.target.reset();
    });

    document.getElementById('item-type-select').addEventListener('change', populateItemDropdown);
    document.getElementById('btn-add-item').addEventListener('click', injectItemInternalList);

    // Bill Header Inputs
    document.getElementById('customer-name').addEventListener('input', (e) => { currentBill.customer = e.target.value; updateLiveDocumentTextLabels(); });
    document.getElementById('customer-phone').addEventListener('input', (e) => { currentBill.phone = e.target.value; updateLiveDocumentTextLabels(); });
    document.getElementById('customer-address').addEventListener('input', (e) => { currentBill.address = e.target.value; updateLiveDocumentTextLabels(); });
    document.getElementById('order-notes').addEventListener('input', (e) => { currentBill.notes = e.target.value; updateLiveDocumentTextLabels(); });
    
    document.getElementById('product-order-qty').addEventListener('input', calculateWorkspaceTotals);
    document.getElementById('courier-input').addEventListener('input', calculateWorkspaceTotals);
    document.getElementById('discount-input').addEventListener('input', calculateWorkspaceTotals);

    setupLiveToggleLogic('expense-percentage-select', 'custom-expense-input');
    setupLiveToggleLogic('profit-percentage-select', 'custom-profit-input');

    // Action Buttons
    document.getElementById('btn-add-product-to-list').addEventListener('click', pushProductToInvoiceList);
    document.getElementById('btn-save-bill').addEventListener('click', commitBillToDatabaseMemory);
    document.getElementById('btn-new-bill').addEventListener('click', resetWorkspaceEngineData);
    document.getElementById('btn-print-bill').addEventListener('click', () => window.print());
    document.getElementById('btn-whatsapp-bill').addEventListener('click', buildCustomBrandedWhatsAppMessage);
    document.getElementById('search-saved-bills').addEventListener('input', renderSavedBillsTable);
    document.getElementById('btn-export-json').addEventListener('click', executeSystemJSONBackupExport);
    document.getElementById('btn-import-json').addEventListener('change', executeSystemJSONBackupImport);
    document.getElementById('btn-export-csv').addEventListener('click', exportLedgerToCSVFile);
    
    // THE ORANGE BUTTON
    document.getElementById('btn-auto-test').addEventListener('click', runFastAutomatedMockSuite);
}

// --- CORE FUNCTIONS ---

function setupLiveToggleLogic(sId, iId) {
    const sel = document.getElementById(sId); const inp = document.getElementById(iId);
    sel.addEventListener('change', () => { 
        inp.style.display = sel.value === 'custom' ? 'block' : 'none'; 
        calculateWorkspaceTotals(); 
    });
    inp.addEventListener('input', calculateWorkspaceTotals);
}

function renderInventoryTables() {
    const build = (id, data, key) => {
        const tbl = document.getElementById(id);
        tbl.innerHTML = '<thead><tr><th>Name</th><th>Rate/Stock</th><th>Actions</th></tr></thead>';
        const tbody = document.createElement('tbody');
        data.forEach((item, idx) => {
            let tr = document.createElement('tr');
            let cost = key === 'rawMaterials' ? 
                `₹${item.cost}/${item.qty}${item.unit} (Stock: ${item.stock})` : 
                (key === 'labor' ? `₹${item.rate}/Hr` : `₹${item.price}`);
            
            tr.innerHTML = `
                <td>${item.name}</td>
                <td>${cost}</td>
                <td>
                    <button class="view-btn" onclick="editInvItem('${key}', ${idx})" style="background:#f59e0b; margin-right:5px;">📝</button>
                    <button class="delete-btn" onclick="deleteInvItem('${key}', ${idx})">&times;</button>
                </td>`;
            tbody.appendChild(tr);
        });
        tbl.appendChild(tbody);
    };
    build('table-raw-materials', inventory.rawMaterials, 'rawMaterials');
    build('table-labor', inventory.labor, 'labor');
    build('table-packing', inventory.packing, 'packing');
}

function editInvItem(key, idx) {
    let item = inventory[key][idx];
    let newName = prompt("Update Name:", item.name);
    if (newName === null) return;
    item.name = newName;

    if (key === 'rawMaterials') {
        item.cost = parseFloat(prompt("Update Total Price (₹):", item.cost)) || item.cost;
        item.stock = parseFloat(prompt("Update Current Stock Count:", item.stock)) || item.stock;
    } else if (key === 'labor') {
        item.rate = parseFloat(prompt("Update Hourly Rate (₹):", item.rate)) || item.rate;
    } else {
        item.price = parseFloat(prompt("Update Price (₹):", item.price)) || item.price;
    }
    saveAndSyncInventory();
}

function saveAndSyncInventory() { 
    localStorage.setItem('valaya_inv_v4', JSON.stringify(inventory)); 
    renderInventoryTables(); populateItemDropdown();
}

function populateItemDropdown() {
    const type = document.getElementById('item-type-select').value;
    const select = document.getElementById('item-select'); select.innerHTML = '';
    let targetArr = type === 'raw-material' ? inventory.rawMaterials : (type === 'labor' ? inventory.labor : inventory.packing);
    
    targetArr.forEach(item => {
        let opt = document.createElement('option'); opt.value = item.id;
        opt.textContent = type === 'raw-material' ? `${item.name}` : `${item.name}`;
        select.appendChild(opt);
    });
}

function injectItemInternalList() {
    const type = document.getElementById('item-type-select').value;
    const id = document.getElementById('item-select').value;
    const qty = parseFloat(document.getElementById('item-quantity').value);

    if(!id || isNaN(qty) || qty <= 0) { alert('Enter valid quantity.'); return; }

    let itemData, desc, unitPrice, itemId;
    if (type === 'raw-material') {
        itemData = inventory.rawMaterials.find(x => x.id === id); 
        desc = itemData.name; unitPrice = itemData.cost / itemData.qty; itemId = itemData.id;
    } else if (type === 'labor') {
        itemData = inventory.labor.find(x => x.id === id); 
        desc = `Labor: ${itemData.name}`; unitPrice = itemData.rate; itemId = itemData.id;
    } else {
        itemData = inventory.packing.find(x => x.id === id); 
        desc = `Packing: ${itemData.name}`; unitPrice = itemData.price; itemId = itemData.id;
    }

    currentBill.items.push({ id: 'item_' + Date.now(), itemId, type, description: desc, quantityPerSet: qty, unitPrice });
    document.getElementById('item-quantity').value = '';
    renderInvoiceItems();
}

function renderInvoiceItems() {
    const tbody = document.querySelector('#invoice-items-table tbody'); tbody.innerHTML = '';
    const multiplier = parseInt(document.getElementById('product-order-qty').value) || 1;

    currentBill.items.forEach((item, index) => {
        let tr = document.createElement('tr');
        const scaledQty = item.quantityPerSet * multiplier;
        const totalCost = scaledQty * item.unitPrice;
        tr.innerHTML = `<td><strong>${item.type[0].toUpperCase()}</strong></td>
        <td>${item.description}</td>
        <td>${item.quantityPerSet} sets (Tot: ${scaledQty.toFixed(1)})</td>
        <td>₹${totalCost.toFixed(2)}</td>
        <td><button class="delete-btn" onclick="removeItemFromInvoice(${index})">&times;</button></td>`;
        tbody.appendChild(tr);
    });
    calculateWorkspaceTotals();
}

function removeItemFromInvoice(i) { currentBill.items.splice(i, 1); renderInvoiceItems(); }

function calculateWorkspaceTotals() {
    const multiplier = parseInt(document.getElementById('product-order-qty').value) || 1;
    let subRaw = 0, subLabor = 0, subPacking = 0;

    currentBill.items.forEach(item => {
        const scaledCost = (item.quantityPerSet * multiplier) * item.unitPrice;
        if (item.type === 'raw-material') subRaw += scaledCost;
        else if (item.type === 'labor') subLabor += scaledCost;
        else subPacking += scaledCost;
    });

    document.getElementById('live-sub-raw').textContent = `₹${subRaw.toFixed(2)}`;
    document.getElementById('live-sub-labor').textContent = `₹${subLabor.toFixed(2)}`;
    document.getElementById('live-sub-packing').textContent = `₹${subPacking.toFixed(2)}`;

    const prodTotal = subRaw + subLabor + subPacking;
    document.getElementById('live-production-subtotal').textContent = `₹${prodTotal.toFixed(2)}`;
    
    const expSelect = document.getElementById('expense-percentage-select');
    let expPct = expSelect.value === 'custom' ? (parseFloat(document.getElementById('custom-expense-input').value)||0)/100 : parseFloat(expSelect.value);
    const expVal = subRaw * expPct; 
    
    const profSelect = document.getElementById('profit-percentage-select');
    let profPct = profSelect.value === 'custom' ? (parseFloat(document.getElementById('custom-profit-input').value)||0)/100 : parseFloat(profSelect.value);
    const profVal = (prodTotal + expVal) * profPct;

    const grand = prodTotal + expVal + profVal;
    currentBill.calculatedNetProfit = profVal;

    document.getElementById('live-expense-val').textContent = `₹${expVal.toFixed(2)}`;
    document.getElementById('live-profit-val').textContent = `₹${profVal.toFixed(2)}`;
    document.getElementById('live-grand-total').textContent = `₹${grand.toFixed(2)}`;

    updateLiveDocumentTextLabels();
}

function updateLiveDocumentTextLabels() {
    localStorage.setItem('valaya_bill_v3', JSON.stringify(currentBill));
    document.getElementById('lbl-customer-name').textContent = currentBill.customer || "No Customer Selected";
    document.getElementById('lbl-customer-phone').textContent = currentBill.phone ? `Phone: ${currentBill.phone}` : '';
    document.getElementById('lbl-customer-address').textContent = currentBill.address ? `Shipping: ${currentBill.address}` : '';

    const billBody = document.getElementById('bill-items-body');
    billBody.innerHTML = '';
    let totalBasePrice = 0;

    if (currentBill.productList && currentBill.productList.length > 0) {
        currentBill.productList.forEach((prod, index) => {
            totalBasePrice += prod.price;
            billBody.innerHTML += `
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 5px;">
                        <div style="font-weight: bold;">${prod.name} (x${prod.qty})</div>
                        <button onclick="removeProductFromList(${index})" style="color: red; background: none; border: none; cursor: pointer; font-size: 0.7rem; padding: 0;">[Remove]</button>
                    </td>
                    <td style="text-align: right; font-weight: bold;">₹${prod.price.toFixed(2)}</td>
                </tr>`;
        });
    }

    document.getElementById('lbl-summary-base').textContent = `₹${totalBasePrice.toFixed(2)}`;
    currentBill.courier = parseFloat(document.getElementById('courier-input').value) || 0;
    currentBill.discount = parseFloat(document.getElementById('discount-input').value) || 0;
    document.getElementById('lbl-summary-courier').textContent = `₹${currentBill.courier.toFixed(2)}`;
    document.getElementById('lbl-summary-discount').textContent = `-₹${currentBill.discount.toFixed(2)}`;

    const final = (totalBasePrice + currentBill.courier) - currentBill.discount;
    document.getElementById('lbl-summary-grand').textContent = `₹${Math.max(0, final).toFixed(2)}`;
}

function pushProductToInvoiceList() {
    const name = document.getElementById('product-name').value;
    const qty = parseInt(document.getElementById('product-order-qty').value) || 1;
    const priceText = document.getElementById('live-grand-total').textContent; 
    const price = parseFloat(priceText.replace('₹', '')) || 0;

    if (!name) { alert("Please enter Product Name."); return; }
    if (!currentBill.productList) currentBill.productList = [];
    currentBill.productList.push({ name, qty, price, netProfit: currentBill.calculatedNetProfit || 0 });

    document.getElementById('product-name').value = '';
    document.getElementById('product-order-qty').value = '1';
    currentBill.items = []; 
    renderInvoiceItems(); 
    updateLiveDocumentTextLabels();
    alert("Product added to bill!");
}

function removeProductFromList(index) {
    currentBill.productList.splice(index, 1);
    updateLiveDocumentTextLabels();
}

function deleteInvItem(key, idx) { inventory[key].splice(idx, 1); saveAndSyncInventory(); }

function commitBillToDatabaseMemory() {
    if(!currentBill.customer) return alert('Enter customer name.');
    currentBill.savedGrand = document.getElementById('lbl-summary-grand').textContent;
    let totalP = 0;
    currentBill.productList.forEach(p => totalP += p.netProfit);
    currentBill.totalProfitEarned = totalP;

    savedBills.push({ ...currentBill });
    localStorage.setItem('valaya_saved_v3', JSON.stringify(savedBills));
    renderSavedBillsTable(); rebuildAnalyticsDashboard();
    alert('Bill saved successfully!');
}

function renderSavedBillsTable() {
    const tbody = document.querySelector('#table-saved-bills tbody'); tbody.innerHTML = '';
    savedBills.forEach(b => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${b.id}</td><td>${b.customer}</td><td>${b.savedGrand}</td><td><button class="view-btn" onclick="loadSavedBillArchive('${b.id}')">View</button></td>`;
        tbody.appendChild(tr);
    });
}

function loadSavedBillArchive(id) {
    let target = savedBills.find(x => x.id === id);
    if(target) { currentBill = JSON.parse(JSON.stringify(target)); initWorkspaceMeta(); renderInvoiceItems(); }
}

function resetWorkspaceEngineData() {
    currentBill = { id: '', customer: '', phone: '', address: '', date: '', notes: '', productList: [], items: [], courier: 0, discount: 0 };
    localStorage.removeItem('valaya_bill_v3'); initWorkspaceMeta(); renderInvoiceItems();
}

function executeSystemJSONBackupExport() {
    const packageData = { inventory, savedBills };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(packageData));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr); dlAnchor.setAttribute("download", `BACKUP_${Date.now()}.json`); dlAnchor.click();
}

function executeSystemJSONBackupImport(e) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        const parsed = JSON.parse(event.target.result);
        inventory = parsed.inventory; savedBills = parsed.savedBills;
        localStorage.setItem('valaya_inv_v4', JSON.stringify(inventory));
        localStorage.setItem('valaya_saved_v3', JSON.stringify(savedBills));
        location.reload();
    };
    fileReader.readAsText(e.target.files[0]);
}

function exportLedgerToCSVFile() {
    let csvContent = "data:text/csv;charset=utf-8,ID,Date,Customer,Total,Profit\n";
    savedBills.forEach(b => { csvContent += `${b.id},${b.date},${b.customer},${b.savedGrand},${b.totalProfitEarned || 0}\n`; });
    window.open(encodeURI(csvContent));
}

function rebuildAnalyticsDashboard() {
    let rev = 0, prof = 0;
    savedBills.forEach(b => {
        rev += parseFloat(b.savedGrand.replace('₹', '')) || 0;
        prof += b.totalProfitEarned || 0;
    });
    document.getElementById('stat-revenue').textContent = `₹${rev.toFixed(2)}`;
    document.getElementById('stat-profit').textContent = `₹${prof.toFixed(2)}`;
}

function buildCustomBrandedWhatsAppMessage() {
    let txt = `*VALAYA STORE INVOICE*\nCustomer: ${currentBill.customer}\nTotal: ${document.getElementById('lbl-summary-grand').textContent}\nItems:\n`;
    currentBill.productList.forEach(p => txt += `• ${p.name} (x${p.qty})\n`);
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(txt)}`, '_blank');
}

// THE "ORANGE BUTTON" - DEMO MODE
function runFastAutomatedMockSuite() {
    // 1. Force Reset Inventory to 164 items if list is short
    inventory = JSON.parse(JSON.stringify(MASTER_DATABASE));
    inventory.labor = [
        { id: 'l1', name: 'Sister (Designer)', rate: 150 },
        { id: 'l2', name: 'Helper', rate: 70 }
    ];
    inventory.packing = [{ id: 'p1', name: 'Premium Bangle Box', price: 65 }];
    saveAndSyncInventory();

    // 2. Setup a Demo Bill
    currentBill.customer = "Priyanka Roy";
    currentBill.phone = "919988776655";
    currentBill.address = "Sector 5, Kolkata";
    currentBill.notes = "Special requested 2 sets of Zari designs";

    // 3. Fill the "Recipe" (The stuff in the middle column)
    currentBill.items = [
        { itemId: 'rm_1', type: 'raw-material', description: 'Bangles Normal base', quantityPerSet: 1, unitPrice: 120 },
        { itemId: 'rm_3', type: 'raw-material', description: 'Thread (Reel)', quantityPerSet: 2, unitPrice: 18 },
        { itemId: 'rm_12', type: 'raw-material', description: 'White and Gold kundans', quantityPerSet: 0.5, unitPrice: 1.5 },
        { itemId: 'l1', type: 'labor', description: 'Labor: Sister (Designer)', quantityPerSet: 1, unitPrice: 150 }
    ];

    // 4. Fill the "Scaling" and "Extras"
    document.getElementById('product-name').value = "Royal Zari Bangle Set";
    document.getElementById('product-order-qty').value = "2"; // 2 Sets
    document.getElementById('courier-input').value = "80";
    document.getElementById('discount-input').value = "20";

    // 5. Apply everything
    initWorkspaceMeta();
    renderInvoiceItems();
    calculateWorkspaceTotals();
    
    alert('DEMO LOADED!\n\nI have filled in a sample customer, a "Recipe" for 1 set, and scaled it to 2 sets.\n\nYou can see how the Making Cost + Expenses + Profit = Final Price.');
}
