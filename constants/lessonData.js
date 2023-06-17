import {
  upholstery,
  woodwork,
  woodworkMachines,
  buildingDrawing,
  roofing,
  w1,
  w2,
  w3,
  w4,
  w5,
  w6,
  table,
  b1,
  b2,
  b3,
  b4,
  r1,
} from "../assets/images";
import { View, Text, Image, useWindowDimensions } from "react-native";
import { FONTS, SIZES } from "./theme";

const HeadingText = ({ text }) => (
  <Text
    style={{
      fontFamily: FONTS.Bold,
      fontSize: SIZES.Large,
      color: "#222",
    }}
  >
    {text}
  </Text>
);
const SubHeadingText2 = ({ text }) => (
  <Text
    style={{
      fontFamily: FONTS.Medium,
      fontSize: SIZES.Normal,
      color: "#333",
      textAlign: "justify",
    }}
  >
    {text}
  </Text>
);
const SubHeadingText = ({ children }) => (
  <Text
    style={{
      fontFamily: FONTS.Light,
      fontSize: SIZES.Normal + 2,
      color: "#333",
      textAlign: "justify",
    }}
  >
    {children}
  </Text>
);
const Content = ({ children }) => (
  <Text
    style={{
      fontFamily: FONTS.Light,
      fontSize: SIZES.Normal,
      color: "#333",
      textAlign: "justify",
    }}
  >
    {children}
  </Text>
);

const Container = ({ children }) => {
  return <View style={{ width: "100%", height: "auto" }}>{children}</View>;
};

const ContentImg = ({ url }) => {
  const { height } = useWindowDimensions();

  return (
    <Image
      source={url}
      resizeMode="contain"
      style={{
        width: "100%",
        height: height * 0.55,
        marginVertical: -150,
      }}
    />
  );
};

export default [
  {
    topic: "Definition of Upholstery and Furniture Making",
    bgImg: upholstery,
    content: () => (
      <>
        <HeadingText text="Definition" />
        <SubHeadingText>
          Upholstery is the work of providing furniture, especially seats, with
          padding, springs, webbing, and fabric or leather covers. The word also
          refers to the materials used to upholster something.
          {"\n"}
          {"\n"}
          Furniture-making process of furniture manufacturing involves
          designing, cutting, shaping, joining, finishing, and assembling
          various materials such as wood, metal, plastic, and glass to create a
          final product that is both functional and aesthetically pleasing.
        </SubHeadingText>
        <Content>
          There are various types of upholstery and furniture, each with its own
          distinct characteristics and purposes. Here are some common types:
          Sofas: {"\n"}
          1. Sofas are upholstered seating furniture designed to accommodate
          multiple people. They typically have a backrest, armrests, and seat
          cushions. Sofas come in different styles, such as traditional, modern,
          sectional, or loveseats. {"\n"}
          2. Chairs: Chairs are standalone seating furniture with a backrest
          and, in some cases, armrests. They come in various designs, including
          dining chairs, accent chairs, recliners, and armchairs. {"\n"}
          3. Ottomans: Ottomans are low, upholstered stools or footrests that
          provide additional seating or can be used as a surface for resting
          your feet. They come in different shapes and sizes and can also serve
          as storage units.
          {"\n"}
          4. Beds: Upholstered beds feature fabric or leather coverings on the
          headboard, footboard, and sometimes the side panels. They provide
          comfort and style in bedrooms and come in various sizes and designs,
          such as platform beds, sleigh beds, or canopy beds. {"\n"}
          5. Benches: Upholstered benches are long seating furniture pieces that
          typically feature a padded seat and may or may not have a backrest.
          They can be used in entryways, dining areas, or as decorative pieces
          in various rooms. {"\n"}
          6. Dining Room Chairs: These chairs are specifically designed for
          dining tables. They often have cushioned seats and backs to provide
          comfort during meals. {"\n"}
          7. Recliners: Recliners are upholstered chairs that have a mechanism
          allowing the backrest to recline and the footrest to extend. They are
          known for providing a comfortable seating experience, perfect for
          relaxation. {"\n"}
          8. Chaise lounges: Chaise lounges are long chairs with an extended
          seat for reclining or stretching out. They are commonly used in living
          rooms, bedrooms, or outdoor spaces. {"\n"}
          9. Bar Stools: Bar stools are tall, narrow chairs designed for seating
          at raised countertops or bars. They often have cushioned seats and may
          have a swivel mechanism.
          {"\n"}
          10. Outdoor Furniture: Upholstered outdoor furniture is designed to
          withstand outdoor conditions. It includes sofas, chairs, and loungers
          made with weather-resistant materials and fabrics.
          {"\n"}
          {"\n"}
          These are just a few examples of the types of upholstery and furniture
          available. Each type serves different purposes and comes in various
          styles, materials, and designs to cater to different tastes and needs.
        </Content>
      </>
    ),
  },
  {
    topic: "Upholstery, Furniture-making Hand tools and their functions",
    bgImg: upholstery,
    content: () => (
      <>
        <HeadingText text="Definition" />
        <SubHeadingText>
          Furniture hand tools are the tools used by upholsterers and furniture
          craftsmen to carry out various tasks involved in upholstery and
          furniture making. These tools are designed to aid in cutting, shaping,
          fastening, and manipulating materials used in upholstery and furniture
          construction. Some common upholstery and furniture hand tools include:
        </SubHeadingText>
        <Content>
          1. Chisel: A chisel is a tool with a characteristically shaped cutting
          edge of blade on its end, for carving or cutting a hard material such
          as wood. {"\n"}
          2. Coping saw: is a type of bow saw used to cut intricate external
          shapes and interior cut-outs in woodworking or carpentry.
          {"\n"}
          3. Marking Gauge: also known as a scratch gauge, is used in
          woodworking and metalworking to mark out lines for cutting or other
          operations. The purpose of the gauge is to scribe a line parallel to a
          reference edge or surface.
          {"\n"}
          4. Card scraper or cabinet scraper: is a woodworking shaping and
          finishing tool. It is used to manually remove small amounts of
          material and excels in tricky grain areas where hand planes would
          cause tear out. {"\n"}
          5. Jack plane is a general-purpose woodworking bench plane, used for
          dressing timber down to size in preparation for truing and/or edge
          jointing. {"\n"}
          6. Spoke shave: is a hand tool used to shape and smooth woods in
          woodworking jobs such as making cart wheel spokes, chair legs,
          paddles, bows, and arrows.{"\n"}
          7. Marking knife or striking knife: is a woodworking layout tool used
          for accurately marking workpieces. It is used to cut a visible line,
          which can then be used to guide a hand saw, chisel or plane when
          making woodworking joints and other operations.{"\n"}
          8. smoothing plane or smooth plane: is a type of bench plane used in
          woodworking. The smoothing plane is typically the last plane used on a
          wood surface, removing very fine shavings to leave a smooth finish.
        </Content>
      </>
    ),
  },
  {
    topic: "Types of Furniture-making Materials",
    bgImg: upholstery,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          A furniture making material refers to any substance or material used
          in the construction and fabrication of furniture pieces. These
          materials are chosen based on their suitability for specific furniture
          designs, desired aesthetics, durability, cost, and functionality. Here
          are some common furniture making materials: A furniture making
          material refers to any substance or material used in the construction
          and fabrication of furniture pieces. These materials are chosen based
          on their suitability for specific furniture designs, desired
          aesthetics, durability, cost, and functionality. Here are some common
          furniture making materials: {"\n"}
        </SubHeadingText>
        <Content>
          1. Plastics: are a wide range of synthetic or semi-synthetic materials
          that use polymers as a main ingredient. Their plasticity makes it
          possible for plastics to be moulded, extruded or pressed into solid
          objects of various shapes. Plastic is very suitable for the outdoors
          and comes in a variety of colors. However, Plastic material furniture
          loses it's strength over time. {"\n"}
          2. Metal is a material that, when freshly prepared, polished, or
          fractured, shows a lustrous appearance, and conducts electricity and
          heat relatively well. Metals are typically ductile and malleable.
          These properties are the result of the metallic bond between the atoms
          or molecules of the metal. For structures where wood is not strong
          enough, metal is a common choice due to its natural strength and
          resistance. It is more expensive than wood. {"\n"}
          3. Glass is a non-crystalline, often transparent, amorphous solid that
          has widespread practical, technological, and decorative use in, for
          example, window panes, tableware, and optics. Glass is most often
          formed by rapid cooling of the molten form; some glasses such as
          volcanic glass are naturally occurring. Glass is a unique raw material
          used by manufacturers to create furniture. Glass tables are popularly
          used for dining and decorative purposes. {"\n"}
          4. Leather is a strong, flexible and durable material obtained from
          the tanning, or chemical treatment, of animal skins and hides to
          prevent decay. The most common leathers come from cattle, sheep,
          goats, equine animals, buffalo, pigs and hogs, and aquatic animals
          such as seals and alligators. Leather: Leather is extensively used to
          make sofas. They reflect luxury, comfort and durability. Leather sofas
          are suitable for rough use. {"\n"}
          5. Lumber is wood that has been processed into uniform and useful
          sizes, including beams and planks or boards. Lumber is mainly used for
          construction framing, as well as finishing. Lumber has many uses
          beyond home building. Lumber is the most authentic material used to
          make furniture. {"\n"}
          6. Stainless steel is an alloy of iron that is resistant to rusting
          and corrosion. It contains at least 11% chromium and may contain
          elements such as carbon, other nonmetals and to obtain other desired
          properties.
        </Content>
      </>
    ),
  },
  {
    topic: "Summary",
    bgImg: upholstery,
    content: () => (
      <>
        <HeadingText text="Summary on Upholstery and Furniture-making" />
        <SubHeadingText>
          1. A finished size of wood part would not be found on a bill of
          materials. {"\n"}
          2. A hinge is a piece of hardware used as a joint. {"\n"}
          3. Short pieces of wood can be made into a longer, more usable piece
          by joining them together with End-to-End half lap. {"\n"}
          4. When using a crosscut saw, it is recommended to cut with the grain.{" "}
          {"\n"}
          5. Backsaw is used to cut irregular shapes. {"\n"}
        </SubHeadingText>
      </>
    ),
  },
  // End of Upholstery

  // Wood work start
  {
    topic: "Properties of Materials",
    bgImg: woodwork,
    content: () => (
      <>
        <HeadingText text="Properties of Materials" />
        <SubHeadingText>
          Wood is an organic substance derived from the live tree and has a
          fibrous, heterogeneous, and anisotropic texture. One of the ancient
          building materials is wood. The main physical properties of wood
          include color, luster, texture, macro-structure, odor, moisture,
          shrinkage, internal stresses, swelling, cracking, warping, density,
          sound – electro – thermal conductivity. Сolor, shine, texture, and
          macrostructure determine the appearance of wood.
        </SubHeadingText>

        <Content>
          1. Sensory Characteristics: Color, luster, smell, flavor, texture,
          grain, figure, weight, and hardness of wood are examples of sensory
          properties. For purposes of identification or other uses, these
          additional macroscopic features are useful in describing a piece of
          wood. {"\n"}
          2. Density and specific gravity: Specific gravity is the ratio of the
          weight or mass of wood to that of water, while density is the weight
          or mass of a unit volume of wood. Because 1 cc of water weighs 1 gram,
          the average density and specific gravity of Douglas fir wood are both
          0.45 gram per cubic centimeter (g/cc), respectively. {"\n"}
          3. Hygroscopicity: If in touch with water, wood can absorb it as a
          liquid or as a vapor from the air. Water is the most significant
          liquid or gas that wood can absorb, despite this. Wood always includes
          moisture due to its hygroscopic nature, whether it is a component of
          the living tree or a material.{"\n"}
          4. Shrinkage and swelling: When the moisture level in wood varies
          below the fiber saturation point, dimensional changes occur. Shrinkage
          and swelling are caused by moisture gain and loss, respectively. These
          dimensional changes are anisotropic, meaning they differ in the axial,
          radial, and tangential directions. {"\n"}
          5. Degradation: Bacteria, fungi, insects, marine borers, as well as
          environmental, mechanical, chemical, and thermal variables, all
          contribute to the destruction of wood. The look, structure, or
          chemical makeup of wood can change due to degradation, which can
          impact living trees, logs, or products. {"\n"}
          6. Thermal properties: Even though wood expands and contracts with
          variations in temperature, shrinkage, and swelling brought on by
          changes in moisture content are much more significant dimensional
          alterations.{"\n"}
          7. Electric properties: Electrical insulation can be found in
          oven-dried wood. However, when moisture content rises, electric
          conductivity rises as well, causing saturated wood (wood with the
          highest moisture content) to behave more like water.
        </Content>
      </>
    ),
  },
  {
    topic: "Types of Wood Joints",
    bgImg: woodwork,
    content: () => (
      <>
        <HeadingText text="Types of Wood Joints" />
        <SubHeadingText>
          There are several types of wood joints. However, the following will be
          considered;
        </SubHeadingText>

        <Container>
          <Content>
            1. Mortise and tenon joint connects two pieces of wood or other
            material. Woodworkers around the world have used it for thousands of
            years to join pieces of wood, mainly when the adjoining pieces
            connect at right angles.
          </Content>
          <ContentImg url={w1} />
          <Content>
            2. Miter” is another word for an angled cut—and the saw that makes
            the cut. In the term “miter joint,” it refers to two 45-degree
            angled cuts where the pieces of wood adjoin to create a 90-degree
            angle.
          </Content>
          <ContentImg url={w2} />
          <Content>
            3. butt joint is the most basic type of wood joint. Two different
            wood pieces simply sit side by side, with the butt of one workpiece
            adjacent to the butt of another workpiece.
          </Content>
          <ContentImg url={w3} />
          <Content>
            4. These joints consist of a tongue, or a ridge, on one piece of
            wood and a groove, or channel, on the other. The tongue slides into
            the groove to create a strong joint.
          </Content>
          <ContentImg url={w4} />
          <Content>
            5. With a half-lap joint, the ends of the two adjoining pieces of
            wood are reduced to half their thickness at the point where they
            overlap.
          </Content>
          <ContentImg url={w5} />
          <Content>
            6. Dado joints are most commonly used in shelving systems like
            cabinets and bookshelves.
          </Content>
          <ContentImg url={w6} />
        </Container>
      </>
    ),
  },
  {
    topic: "Principles of Frame Construction",
    bgImg: woodwork,
    content: () => (
      <>
        <HeadingText text="Principles of Frame Construction" />
        <SubHeadingText>
          Framed structures are the structures which are formed by connecting a
          series of horizontal and vertical structural members in suitable
          positions. The framed structures primarily comprise of columns and
          beams. Columns are connected by beams at the floor and roof levels.
          The floors are divided into rooms and passages of required sizes by
          walls. The walls may be load-bearing walls or partition walls. The
          materials used for framed structures, in general, maybe wood or steel.
        </SubHeadingText>

        <Content>
          Materials Used for Framed Structures includes:{"\n"}
          1. Timber: Use of timber for framed structures offer several
          advantages like beauty, versatility, durability, low cost, high
          strength-to-weight ratio, excellent electrical insulation and high
          shock absorption capacity.{"\n"}
          2. Steel: In general, the steel framework supports all loads. In this
          type, all columns, beams and girders in the framed structure are of
          the steel section. Adequate bracing is needed for these structures in
          order to resist the wind and earthquake forces. {"\n"}
          3. Reinforced cement concrete (RCC): forms the best material for
          framed structures, provided they are properly designed and
          constructed.
        </Content>
      </>
    ),
  },
  {
    topic: "Wood Joint Summary",
    bgImg: woodwork,
    content: () => (
      <>
        <HeadingText text="Summary" />
        <SubHeadingText>
          1. Button joints are made by joining together the edge, edge surface
          and end of the wood. {"\n"}
          2. End and butt joints are the two main types of butt joints. {"\n"}
          3. Butt joints can be strengthened using corner blocks, biscuits,
          dowels and metal fasteners. {"\n"}
          4. Biscuits are made from compressed beech. {"\n"}
          5. When making biscuit joints, the slots should be slightly longer
          than the biscuits to allow for adjustments and expansion. {"\n"}
        </SubHeadingText>
      </>
    ),
  },
  // End of joint

  // Start of wood work machines
  {
    topic: "Definition of woodwork machines",
    bgImg: woodworkMachines,
    content: () => (
      <>
        <HeadingText text="Definition of woodwork machines" />
        <SubHeadingText>
          A Woodworking machine is a machine that is intended to process wood.
          These machines are usually powered by electric motors and are used
          extensively in woodworking.
          {"\n"}
          Or
          {"\n"}
          Woodwork machines are mechanical tools or equipment specifically
          designed for working with wood, enabling various woodworking tasks and
          operations to be performed more efficiently and accurately. These
          machines are commonly used in woodworking shops, furniture
          manufacturing, carpentry, and other woodworking industries.
        </SubHeadingText>
      </>
    ),
  },
  {
    topic: "Types of Woodwork Machines",
    bgImg: woodworkMachines,
    content: () => (
      <>
        <HeadingText text="Types of Woodwork Machines" />
        <SubHeadingText>
          There are various woodwork machines amongst which are:
        </SubHeadingText>

        <Content>
          1. Surface/Thickness Planer: The wood surface planer or better-known
          as thickness planer is one of the popular wood workshop machines
          mainly used for finishing flat wooden surfaces to provide consistency
          in thickness and shape.{"\n"}
          2. Tenoning Machine: The wooden work-pieces in any wooden artifact or
          structure are usually joined by using mortise and tenon joints, where
          mortise is a hole drilled on a wooden piece and tenon is a projection
          designed to fit inside that hole with best-fit dimensions on another
          piece. {"\n"}
          3. Grinder/Grinding Machine: A number of different types of grinding
          tools are used in woodworking shops and wooden manufacturing
          industries for providing a better finishing to wooden surfaces. {"\n"}
          4. Wood Lathe: The process of working of wood on a lathe is termed as
          “Wood Turning”. The wood lathe is much like the regular lathe used for
          turning metal and it enables us to shape any wooden workpiece. {"\n"}
          5. Bandsaw: The history of this woodworking machine can be traced as
          far as to the early nineteenth century. This band fits over two or
          more rotating wheels which are driven by powerful electric motors.
          {"\n"}
          6. Router: This handheld power tool provides us the capability to be
          hollow out sections in any wood workpiece and any other materials. The
          router to some extent looks a lot like the handheld sander since it
          also has a circular blade like a sander.
        </Content>
      </>
    ),
  },
  {
    topic: "Safety and Operational Precautions",
    bgImg: woodworkMachines,
    content: () => (
      <>
        <HeadingText text="Safety and Operational Precautions" />
        <SubHeadingText>
          Always wear safety glasses or goggles • Wear a dust mask. Wear hearing
          protection that is suitable for the level and frequency of the noise
          you are exposed to in the woodworking area.
        </SubHeadingText>

        <Content>
          1. Always wear safety equipment. {"\n"}
          2. Wear the right clothes. {"\n"}
          3. Avoid using anything that can impair your reaction time and
          judgement.{"\n"}
          4. Disconnect power. {"\n"}
          5. Use a single extension cord. {"\n"}
          6. Never use blunt blades & bits. {"\n"}
          7. Check stock for existing metal. {"\n"}
          8. Work against the cutte.{"\n"}
          9. Never reach over a running blade{"\n"}
          10. Minimize distractions
        </Content>
      </>
    ),
  },
  {
    topic: "Woodwork Machines Summary",
    bgImg: woodworkMachines,
    content: () => (
      <>
        <HeadingText text="Summary" />
        <SubHeadingText>
          1. Straight edge is not helper used to feed stock into a tool.{"\n"}
          2. Leather or thick fabric are types of gloves worn when working with
          sharp edges and rough materials. {"\n"}
          3. The size of power drill is determined by the size of it's chuck.{" "}
          {"\n"}
          4.Hand drill is generally used to drill holes 1/4 inch or less in
          diameter. {"\n"}
          5. On some power drills, a chuck key is used to tighten the jaws
          around the bit. {"\n"}
        </SubHeadingText>
      </>
    ),
  },

  //Building drawing start
  {
    topic: "Definition of Drawing Symbol",
    bgImg: buildingDrawing,
    content: () => (
      <>
        <HeadingText text="Definition of Drawing Symbol" />
        <SubHeadingText>
          A symbol is a graphical representation of drawings to represent
          specific elements of a building or structure, such as windows, doors,
          stairs, plumbilng, fixtures, electrical outlets and more. They are
          standard and used across industries to ensure clear and consistent
          communication between desiners, contractor and clients.
        </SubHeadingText>
        <Container>
          <Text>{"\n"}</Text>
          <ContentImg url={table} />
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
        </Container>
      </>
    ),
  },
  {
    topic: "Materials and Equipment used in Drawing",
    bgImg: buildingDrawing,
    content: () => (
      <>
        <HeadingText text="Materials and Equipment used in Drawing" />
        <SubHeadingText>
          The materials and equipment used in drawing includes but not limited
          to:
        </SubHeadingText>

        <Content>
          1. Drawing Sheet.{"\n"}
          2. Drawing Board. {"\n"}
          3. Mini Drafter.{"\n"}
          4. T-Square.{"\n"}
          5. Compass.{"\n"}
          6. Divider.{"\n"}
          7. Set Squares.{"\n"}
          8. Clinograph
        </Content>
      </>
    ),
  },
  {
    topic: "Parts of a Building",
    bgImg: buildingDrawing,
    content: () => (
      <>
        <HeadingText text="Parts of a Building" />
        <SubHeadingText>Parts of a building include:</SubHeadingText>

        <Container>
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
          <ContentImg url={b1} />
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
          <SubHeadingText2 text="Foundation" />
          <Content>
            A Foundation is the lowest part of the building structure resting on
            soil below ground level. All loads of building are transferred to
            the foundation through beam and column arrangement.
          </Content>
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
          <ContentImg url={b2} />
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>

          <SubHeadingText2 text="DPC (Damp Proof Course)" />
          <Content>
            DPC is a layer of waterproofing material such as asphalt or
            waterproof cement at the plinth level.
          </Content>
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
          <ContentImg url={b3} />
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
          <SubHeadingText2 text="Roof Cement Concrete (RCC)" />
          <Content>
            RCC Beam is an important component in any frame structure. The beam
            is a horizontal member which connects columns on both sides.
          </Content>
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
          <ContentImg url={b4} />
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
        </Container>
      </>
    ),
  },
  {
    topic: "Building Drawing Summary",
    bgImg: buildingDrawing,
    content: () => (
      <>
        <HeadingText text="Summary" />
        <SubHeadingText>
          1. Broken-out section is the type limited by break line.{"\n"}
          2. Drafters should use a center line in a section view of a mechanical
          part that includes the cylindrical view of a threaded hole. {"\n"}
          3. The section view drawing in which one fourth of an object has been
          marked for removal is known as Half. {"\n"}
          4.In offset sections, offsets or bends in the cutting plane are all 90
          degrees. {"\n"}
          5. The type of solid that is egg-shaped and can be created by
          revolving an ellipse around one of it's axes is called Ellipsoid.{" "}
          {"\n"}
        </SubHeadingText>
      </>
    ),
  },

  //Roofing start
  {
    topic: "Definition of Roof",
    bgImg: roofing,
    content: () => (
      <>
        <HeadingText text="Definition of Roof" />
        <SubHeadingText>
          A roof (PL: roofs or rooves) is the top covering of a building,
          including all materials and constructions necessary to support it on
          the walls of the building or on uprights, providing protection against
          rain, snow, sunlight, extremes of temperature, and wind.[1] A roof is
          part of the building envelope. The characteristics of a roof are
          dependent upon the purpose of the building that it covers, the
          available roofing materials and the local traditions of construction
          and wider concepts of architectural design and practice, and may also
          be governed by local or national legislation. In most countries, a
          roof protects primarily against rain.
        </SubHeadingText>
      </>
    ),
  },
  {
    topic: "Types of Roof",
    bgImg: buildingDrawing,
    content: () => (
      <>
        <HeadingText text="Types of Roof" />
        <SubHeadingText>
          There are various types of roof but only few shell be discussed today.
          They are;
        </SubHeadingText>

        <Content>
          1. Flat roof is a roof that is completely, or almost level. However,
          whilst they are described as ‘flat’ almost all flat roofs are actually
          laid to a fall to ensure that rainwater can run off to the lower side.
          Typically they are designed to have a minimum fall of 1:40, which
          given on-site inaccuracies should result in a minimum fall of at least
          1:80 in the finished construction. {"\n"} 2. Mansard roof, also known
          as a French or curb roof, is a roof characterized by that fact that
          each of its four sides has two pitches, the lower pitches being
          steeper than the upper pitches. It is similar to a gambrel roof but
          differs in that it displays the same profile on all sides (whereas a
          gambrel roof has vertical gables at either end).{"\n"}
          3. Gambrel roof (also known simply as a gambrel), is a type of
          two-sided roof that is characterised by vertical gable ends and two
          slopes on each side. The upper slope is of a shallower pitch than the
          lower slope which is steeper. {"\n"}
          4. Shell roofs are made from structural ‘skins’ where the shell
          material is thin in section relative to the other dimensions of the
          roof and undergoes relatively little deformation under load.{"\n"}
          5. Metal roof covering in several different ways. The main forms are
          based on sheet-like panels, which may be flat or profiled, and either
          prefabricated, or formed on site, but metal can also be used to create
          shingles - formed into shapes similar to tiles, shakes or slates.
          Sheet metal roofing is typically joined by standing seams or rolled
          joints.
        </Content>
      </>
    ),
  },
  {
    topic: "Parts of a Roof",
    bgImg: roofing,
    content: () => (
      <>
        <HeadingText text="Parts of a Building" />
        <SubHeadingText>Parts of a roof include:</SubHeadingText>

        <Container>
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
          <ContentImg url={r1} />
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
        </Container>
      </>
    ),
  },
  {
    topic: "Roofing Summary",
    bgImg: woodworkMachines,
    content: () => (
      <>
        <HeadingText text="Summary" />
        <SubHeadingText>
          1. Birch is not a type of softwood.{"\n"}
          2. Fir is a type of hardwood. {"\n"}
          3. The first step in a lumber processing is called baking. {"\n"}
          4.When making a miter cut, adjust the overarm to the angle desired.{" "}
          {"\n"}
          5. To cut a bevel, adjust the track for duplicate part. {"\n"}
        </SubHeadingText>
      </>
    ),
  },
];
